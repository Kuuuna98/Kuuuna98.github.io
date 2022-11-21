---
title: 봄버맨
description: 백준 알고리즘 문제 https://www.acmicpc.net/problem/16918
category: 알고리즘
tags: [hello]
date: 2022-11-07T16:04:15.157Z
---

- 소요 시간: 1시간 20분
- 메모리: 82076 KB
- 시간: 796 ms

## 문제 접근

자신보다 크기가 작고, 다른 색인 공만 잡을 수 있다<br>
-> 정렬<br>
-> 크기가 작은 공부터 크기를 합쳐서 계산 (누적합)<br>

<details>
<summary>풀이 이미지</summary>
<img src="https://user-images.githubusercontent.com/26339069/178304023-3ae69e98-4e8f-4ee4-9656-9afc0c724330.jpg" width="600">
</details>

## 문제 풀이

1. Node 우선순위 큐 정의 (크기 작은 순 다음으로 색 번호 낮은 순으로 정렬)

2. N개 공을 입력받아 pq에 인덱스 번호와 함께 저장한다 (인덱스 번호는 출력을 하기 위함)

3. 배열 및 변수 초기화<br>
   result: 입력으로 받은 공 본인보다 작고 다른 색인 공 크기 합을 저장하는 배열<br>
   arr: 지금 확인하는 공 크기의 직전 작은 공 크기까지의 색상 별 크기 총합<br>
   sum: 지금 확인하는 공 크기의 직전 작은 공까지의 공 크기 총합<br>
   cur_c: 현재 공의 색 번호<br>
   cur_s: 현재 공의 크기<br>
   cur_color_cnt: 현재 공과 크기가 같으면서 색이 같은 공의 개수<br>
   cur_size_cnt: 현재 공과 크기가 같은 공의 개수<br>

4. pq가 빌때까지 반복(4~9)

5. pq에서 공을 빼서 node에 저장

6. 전에 확인한 공보다 크기가 커졌을 경우<br>
   6-1. sum에 직전 크기의 공 크기 합을 구해 더한다<br>
   6-2. 직전 공의 같은 크기, 같은 색 공은 확인이 완료 되었으므로 arr에 크기의 합을 구해 갱신한다(arr[cur_c]+=cur_s\*cur_color_cnt)<br>
   6-3. 새로운 크기의 공을 확인하기 때문에 변수들을 초기화 시킨다<br>
   6-4. cur_c에 현재 공의 색 번호를 저장한다<br>
   6-5. cur_s에 현재 공의 크기를 저장한다<br>

7. 전에 확인한 공과 크기가 같고 색이 같은 경우<br>
   7-1. cur_color_cnt을 1 증가시킨다<br>

8. 직전에 확인한 공과 크기가 같고 색이 다른 경우<br>
   8-1. 직전 공의 같은 크기, 같은 색 공은 확인이 완료 되었으므로 arr에 크기의 합을 구해 갱신한다<br>
   8-2. cur_size_cnt에 cur_color_cnt를 더한 후 cur_color_cnt는 1로 초기화한다<br>
   8-3. cur_c에 현재 공의 색 번호를 저장한다<br>

9. 현재 공의 입력 인덱스에 맞게 result에 결과를 저장한다. 결과는 sum에서 현재 공과 같은 색의 공 크기를 뺀 값이다(result[node.idx]=sum-arr[node.color])

10. result에 저장된 결과를 순차적으로 출력한다.

## 전체 코드

```java
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.PriorityQueue;
import java.util.StringTokenizer;

public class Main_bj10800 {
    public static void main(String[] args) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        int N = Integer.parseInt(br.readLine());
        PriorityQueue<Node> pq = new PriorityQueue<>();

        for(int n=0; n<N; n++){
            StringTokenizer st =new StringTokenizer(br.readLine()," ");
            int C = Integer.parseInt(st.nextToken()), S= Integer.parseInt(st.nextToken());
            pq.offer(new Node(n,C,S));
        }

        int[] result = new int[N];
        int[] arr = new int[N+1];
        int sum=0, cur_c=0, cur_s=0, cur_color_cnt=0, cur_size_cnt=0;
        while(!pq.isEmpty()){
            Node node = pq.poll();
            if(cur_s<node.size){
                sum+=cur_s*(cur_size_cnt+cur_color_cnt);
                arr[cur_c]+=cur_s*cur_color_cnt;
                cur_size_cnt=0;
                cur_color_cnt=1;
                cur_c=node.color;
                cur_s=node.size;
            }else{
                if(cur_c==node.color){
                    cur_color_cnt++;
                }else {
                    arr[cur_c]+=cur_s*cur_color_cnt;
                    cur_size_cnt+=cur_color_cnt;
                    cur_color_cnt=1;
                    cur_c=node.color;
                }
            }
            result[node.idx]=sum-arr[node.color];
        }

        for(int n=0; n<N; n++) {
            sb.append(result[n]).append("\n");
        }
        System.out.print(sb.toString());
        br.close();
    }
    static class Node implements Comparable<Node>{
        int idx, color, size;
        Node(int idx, int color,int size){
            this.idx=idx;
            this.color=color;
            this.size=size;
        }
        @Override
        public int compareTo(Node o) {
            return this.size==o.size?Integer.compare(this.color, o.color):Integer.compare(this.size, o.size);
        }
    }
}
```
