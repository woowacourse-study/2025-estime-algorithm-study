import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

// [백준] 1005: ACM Craft
public class Main {

    private static int N, K, W;
    private static List<List<Integer>> graph;
    private static int[] D;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int T = Integer.parseInt(br.readLine());
        for (int t = 0; t < T; t++) {
            initialize(br);

            // 진입차수 계산
            int[] inDegree = new int[N + 1];
            for (int from = 1; from <= N; from++) {
                List<Integer> toIdxs = graph.get(from);
                for (int to : toIdxs) {
                    inDegree[to]++;
                }
            }

            // DP 초기화
            int[] dp = new int[N + 1];

            // 진입차수가 0인 건물 큐에 넣고 DP 초기값 설정
            ArrayDeque<Integer> deque = new ArrayDeque<>();
            for (int u = 1; u <= N; u++) {
                if (inDegree[u] == 0) {
                    deque.offerLast(u);
                    dp[u] = D[u];
                }
            }

            // 위상 정렬 진행 (시간 갱신)
            while (!deque.isEmpty()) {
                int u = deque.pollFirst();
                for (int v : graph.get(u)) {
                    dp[v] = Math.max(dp[v], dp[u] + D[v]);
                    inDegree[v]--;

                    if (inDegree[v] == 0) {
                        deque.offerLast(v);
                    }
                }
            }

            System.out.println(dp[W]);
        }
    }

    private static void initialize(BufferedReader br) throws IOException {
        // 건물의 개수 N과 건물간의 건설순서 규칙의 총 개수 K 입력
        StringTokenizer st = new StringTokenizer(br.readLine());
        N = Integer.parseInt(st.nextToken());

        // 건물의 개수 N개의 그래프 초기화
        graph = new ArrayList<>();
        for (int i = 0; i <= N; i++) {
            graph.add(new ArrayList<>());
        }

        K = Integer.parseInt(st.nextToken());

        // 각 건물(N개)당 건설에 걸리는 시간 D 입력
        D = new int[N + 1];
        st = new StringTokenizer(br.readLine());
        for (int i = 1; i <= N; i++) {
            D[i] = Integer.parseInt(st.nextToken());
        }

        // 건설 순서 X, Y 입력
        for (int i = 0; i < K; i++) {
            st = new StringTokenizer(br.readLine());
            int X = Integer.parseInt(st.nextToken());
            int Y = Integer.parseInt(st.nextToken());

            graph.get(X).add(Y);
        }

        // 건설해야 할 건물 번호 W 입력
        W = Integer.parseInt(br.readLine());
    }
}
