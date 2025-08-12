import java.io.*;
import java.util.*;
import java.util.stream.Collectors;

public class BJ_13975 {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int t = Integer.parseInt(br.readLine());
        for (int i = 0; i < t; i++) {
            int n = Integer.parseInt(br.readLine());
            List<Long> arr = Arrays.stream(br.readLine().split(" ")).mapToLong(Long::parseLong).mapToObj(x -> x).collect(Collectors.toList());
            Queue<Long> q = new PriorityQueue<>(arr);
            long res = 0;
            while (q.size() > 1) {
            long target = q.remove() + q.remove();
            res += target;
            q.add(target);
            }
            bw.write(Long.toString(res));
            bw.newLine();
        }
        bw.flush();
    }
}
