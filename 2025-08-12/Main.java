import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

// [백준] 10942: 팰린드롬?
public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        // 수열의 크기 N 입력
        int N = Integer.parseInt(br.readLine());

        // 팰린드롬 확인 수열 입력
        int[] A = new int[N + 1];
        StringTokenizer st = new StringTokenizer(br.readLine());
        for (int i = 1; i <= N; i++) {
            A[i] = Integer.parseInt(st.nextToken());
        }

        // 팰린드롬 확인 DP 계산
        boolean[][] isPal = new boolean[N + 1][N + 1];

        for (int l = 1; l <= N; l++) {
            // 길이 1 확인
            isPal[l][l] = true;

            // 길이 2 확인
            if (l < N && (A[l] == A[l + 1])) {
                isPal[l][l + 1] = true;
            }
        }

        // 길이 3..N 확인
        for (int len = 3; len <= N; len++) {
            for (int l = 1; l + len - 1 <= N; l++) {
                int r = l + len - 1;
                isPal[l][r] = (A[l] == A[r]) && isPal[l + 1][r - 1];
            }
        }

        // 질문의 개수 M 입력
        int M = Integer.parseInt(br.readLine());

        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < M; i++) {
            st = new StringTokenizer(br.readLine());
            int S = Integer.parseInt(st.nextToken());
            int E = Integer.parseInt(st.nextToken());

            int result = isPal[S][E] ? 1 : 0;
            sb.append(result).append("\n");
        }

        System.out.println(sb);
    }
}
