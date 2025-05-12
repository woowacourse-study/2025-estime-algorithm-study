import { ComponentProps, useId } from "react";

// 대게의 케이스에서 탈이 없고, 상당히 유용한 패턴인데 매우 간단한것 같아서 공유합니다.

// 1. input의 props를 그대로 가져와서 사용할 수 있는 컴포넌트를 만들고 싶어요.

// input을 그대로 쓰고 싶은데... 근데 label을 붙인 <CustomInput/> 컴포넌트를 만들고 싶어요!
// 그럴때는 input의 props를 그대로 가져와서 사용할수 있어요.
// ComponentProps는 props의 타입을 가져오는 유틸리티 타입입니다.
// ComponentProps<"input">는 input의 props를 가져오는거고, 그걸 CustomInputProps에 넣어주면
// CustomInputProps는 input의 props를 그대로 사용할 수 있습니다.

interface CustomInputProps extends ComponentProps<"input"> {
  label?: string;
}
// 1.1. 이런 방식의 이점은 무엇인가요?

// 이렇게 만들면, <CustomInput/> 컴포넌트를 사용할때,
// input의 props의 자동완성 되는 프롭들을 모조리 사용할수 있습니다.
// value, onChange, onBlur, onFocus, type, name.... 같은것들이요.


function CustomInput({
  label,
  value,
  id,
  onChange,
  ...props
}: CustomInputProps) {
  const inputId = id ?? useId();
  // (선택) inputId를 사용하면, label과 input을 연결할 수 있습니다.
  // label의 htmlFor와 input의 id를 연결해주면, label을 클릭했을때 input이 포커스가 가게 됩니다.
  return (
    <div>
      {label && <label htmlFor={inputId}>{label}</label>}
      <input {...props} value={value} id={inputId} />
    </div>
  );
}
// 2. ComponentProps에 있는 타입을 변경하고 싶어요!

// 어 근데, input에서 value는 number로 고정하고 무조건 받아야 할것 같은 유즈 케이스가 있다면 어떻게 할까요?
// 이미 타입이 정의되어져 버렸는데, 어떤 방식으로 이를 해결할 수 있을까요?

// 그럴때는 Omit을 사용해서 value를 빼주고......
// 기왕 onChange도 빼줄까요?
// 다시 재 정의를 해주면...
// value는 number으로 고정되고, 나머지 input의 props는 그대로 사용할 수 있습니다.

interface CustomInputPropsForcingNumberValue
  extends Omit<ComponentProps<"input">, "value" | "defaultValue" | "onChange"> {
  // 2.1 왜 defaultValue를 빼줘야 하나요? (심화과정)

  // 이 부분은 조금 어려울수 있으니, 이해하지 않고, 지나가도 괜찮습니다.
  // value와 defaultValue를 같이 쓰면 해당 컴포넌트가 고장납니다(uncontrolled->controlled).
  // 해당 코드는 직접 실행을 해야지 확인할 수 있습니다. (런타임 에러라고 하지요.)
  // 그런데 기왕 이렇게 한경... value만 number으로 고정하고, defaultValue는 없애버리면
  // ts 컴파일 단에서 에러를 주니, 이를 예방할수 있네요!
  value: number | ""; // ← 빈 문자열 허용 → 지우기 동작 지원
  // value 전체를 지울때도 있으니, 빈 문자열을 허용해줘야 합니다.
  onChange: (value: number | "") => void;
  label?: string;
}


function CustomInputForcingNumberValue({
  label,
  value,
  id,
  onChange,
  ...props
}: CustomInputPropsForcingNumberValue) {
  const inputId = id ?? useId();
  return (
    <div>
      {label && <label htmlFor={inputId}>{label}</label>}
      <input
        {...props}
        value={value}
        id={inputId}
        onChange={(e) => {
          const next = e.target.value === "" ? "" : Number(e.target.value);
          onChange(next);
        }}
      />
    </div>
  );


// 심화과정 (범용도가 점점 떨어지지만, 이해하면 경험치가 많이 쌓일 겁니다.)

// 3. onChange의 타입과 value의 타입을 깔맞춤 할수도 있을까요?
// 제네릭을 사용하면, onChange의 타입과 value의 타입을 깔맞춤 할 수 있습니다.

type InputValue = number | string; // 필요에 따라 정의

// 타입 캐스팅 문제 해결을 위한 변경
interface SmartCustomInputProps<T extends InputValue>
  extends Omit<ComponentProps<"input">, "value" | "defaultValue" | "onChange"> {
  value: T;
  onChange: (value: T) => void;
  parseValue?: (stringValue: string) => T;
  label?: string;
}

function SmartCustomInput<T extends InputValue>({
  label,
  value,
  onChange,
  parseValue,
  id,
  ...props
}: SmartCustomInputProps<T>) {
  const inputId = id ?? useId();

  // 기본 파서 함수들 - 타입에 따라 자동으로 적절한 변환 수행
  const defaultParsers = {
    number: (str: string) => (str === "" ? 0 : Number(str)),
    string: (str: string) => str,
  };

  // 사용자 정의 파서 또는 타입에 맞는 기본 파서 사용
  const parser =
    parseValue ||
    (typeof value === "number"
      ? (defaultParsers.number as (s: string) => T)
      : (defaultParsers.string as (s: string) => T));

  return (
    <div>
      {label && <label htmlFor={inputId}>{label}</label>}
      <input
        {...props}
        value={value}
        id={inputId}
        onChange={(e) => {
          const newValue = parser(e.target.value);
          onChange(newValue);
        }}
      />
    </div>
  );
}

import { useState } from "react";

export default function ExampleForm() {
  // 숫자 입력(삭제‑빈칸 포함) ‑ 빈값은 ""으로 관리
  const [qty, setQty] = useState<number | "">("");

  // 제네릭 입력: 숫자
  const [price, setPrice] = useState<number>(0);

  // 제네릭 입력: 문자열
  const [nickname, setNickname] = useState("홍여사");

  return (
    <form style={{ display: "grid", gap: 16, width: 240 }}>
      {/* 1) input 프롭 그대로 + label 옵션 */}
      <CustomInput
        label="이메일"
        type="email"
        placeholder="you@example.com"
        required // ⬅ input 고유 프롭도 그대로 전달
      />

      {/* 2) 숫자 전용 + 빈문자열 허용 */}
      <CustomInputForcingNumberValue
        label="수량"
        value={qty}
        onChange={setQty}
        min={0}
        step={1}
      />

      {/* 3‑A) SmartCustomInput<number>  — parseValue 지정 */}
      <SmartCustomInput<number>
        label="가격(원)"
        value={price}
        onChange={setPrice}
        parseValue={(str) => (str === "" ? 0 : Number(str))}
        min={0}
      />

      {/* 3‑B) SmartCustomInput<string> — parseValue 생략(기본 string 파서) */}
      <SmartCustomInput
        label="닉네임"
        value={nickname}
        onChange={setNickname}
        maxLength={10}
      />
    </form>
  );
}
