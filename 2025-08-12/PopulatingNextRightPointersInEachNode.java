// 풀이1. 같은 depth의 노드들을 돌면서 연결하는 풀이

class Solution {
    public Node connect(Node root) {
        if (root == null) return root;

        Queue<Node> queue = new LinkedList<>();
        queue.add(root);

        while(!queue.isEmpty()) {
            List<Node> curLevels = new ArrayList<>();
            int curQueueSize = queue.size();
            for (int i = 0; i < curQueueSize; i++) {
                Node node = queue.poll();
                curLevels.add(node);
                if (node.left != null) queue.add(node.left);
                if (node.right != null) queue.add(node.right);
            }


            int size = curLevels.size();
            for (int i = 0; i < size; i++) {
                Node cur = curLevels.get(i);
                if (i == size - 1) {
                    cur.next = null;
                } else {
                    cur.next = curLevels.get(i + 1);
                }
            }
        }

        return root;
    }
}

// 풀이2. 풀이1의 공간복잡도 개선버전
//class Solution {
//    public Node connect(Node root) {
//        if (root == null) return root;
//
//        Queue<Node> queue = new LinkedList<>();
//        queue.add(root);
//
//        while(!queue.isEmpty()) {
//            int size = queue.size();
//            Node prev = null;
//
//            for (int i = 0; i < size; i++) {
//                Node node = queue.poll();
//                if (prev != null) {
//                    prev.next = node;
//                }
//                prev = node;
//
//                if (node.left != null) queue.add(node.left);
//                if (node.right != null) queue.add(node.right);
//            }
//            prev.next = null;
//        }
//
//        return root;
//    }
//}

// 풀이3. perfect binary tree라는 조건이 있을 때 가능한 풀이
//class Solution {
//    public Node connect(Node root) {
//        if (root == null) return root;
//
//        Node leftmost = root;
//
//        while (leftmost.left != null) {
//            Node head = leftmost;
//
//            while (head != null) {
//                head.left.next = head.right;
//                if (head.next != null) {
//                    head.right.next = head.next.left;
//                }
//                head = head.next;
//            }
//
//            leftmost = leftmost.left;
//        }
//
//        return root;
//    }
//}
