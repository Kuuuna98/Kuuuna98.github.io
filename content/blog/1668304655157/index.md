---
title: ์ปฌ๋ฌ๋ณผ๐ฑ
description: ๋ฐฑ์ค ์๊ณ ๋ฆฌ์ฆ ๋ฌธ์ ํ์ด bj10800 ์ปฌ๋ฌ๋ณผ https://www.acmicpc.net/problem/10800
category: ์๊ณ ๋ฆฌ์ฆ
tags: [hello]
date: 2022-11-13T10:57:35.157Z
---
![](./ํ์ด.jpeg)
- ์์ ์๊ฐ: 1์๊ฐ 20๋ถ
- ๋ฉ๋ชจ๋ฆฌ: 82076 KB
- ์๊ฐ: 796 ms

## ๋ฌธ์  ์ ๊ทผ

์์ ๋ณด๋ค ํฌ๊ธฐ๊ฐ ์๊ณ , ๋ค๋ฅธ ์์ธ ๊ณต๋ง ์ก์ ์ ์๋ค<br>
-> ์ ๋ ฌ<br>
-> ํฌ๊ธฐ๊ฐ ์์ ๊ณต๋ถํฐ ํฌ๊ธฐ๋ฅผ ํฉ์ณ์ ๊ณ์ฐ (๋์ ํฉ)<br>

<details>
<summary>ํ์ด ์ด๋ฏธ์ง</summary>
<img src="https://user-images.githubusercontent.com/26339069/178304023-3ae69e98-4e8f-4ee4-9656-9afc0c724330.jpg" width="600">
</details>

## ๋ฌธ์  ํ์ด

1. Node ์ฐ์ ์์ ํ ์ ์ (ํฌ๊ธฐ ์์ ์ ๋ค์์ผ๋ก ์ ๋ฒํธ ๋ฎ์ ์์ผ๋ก ์ ๋ ฌ)

2. N๊ฐ ๊ณต์ ์๋ ฅ๋ฐ์ pq์ ์ธ๋ฑ์ค ๋ฒํธ์ ํจ๊ป ์ ์ฅํ๋ค (์ธ๋ฑ์ค ๋ฒํธ๋ ์ถ๋ ฅ์ ํ๊ธฐ ์ํจ)

3. ๋ฐฐ์ด ๋ฐ ๋ณ์ ์ด๊ธฐํ<br>
   result: ์๋ ฅ์ผ๋ก ๋ฐ์ ๊ณต ๋ณธ์ธ๋ณด๋ค ์๊ณ  ๋ค๋ฅธ ์์ธ ๊ณต ํฌ๊ธฐ ํฉ์ ์ ์ฅํ๋ ๋ฐฐ์ด<br>
   arr: ์ง๊ธ ํ์ธํ๋ ๊ณต ํฌ๊ธฐ์ ์ง์  ์์ ๊ณต ํฌ๊ธฐ๊น์ง์ ์์ ๋ณ ํฌ๊ธฐ ์ดํฉ<br>
   sum: ์ง๊ธ ํ์ธํ๋ ๊ณต ํฌ๊ธฐ์ ์ง์  ์์ ๊ณต๊น์ง์ ๊ณต ํฌ๊ธฐ ์ดํฉ<br>
   cur_c: ํ์ฌ ๊ณต์ ์ ๋ฒํธ<br>
   cur_s: ํ์ฌ ๊ณต์ ํฌ๊ธฐ<br>
   cur_color_cnt: ํ์ฌ ๊ณต๊ณผ ํฌ๊ธฐ๊ฐ ๊ฐ์ผ๋ฉด์ ์์ด ๊ฐ์ ๊ณต์ ๊ฐ์<br>
   cur_size_cnt: ํ์ฌ ๊ณต๊ณผ ํฌ๊ธฐ๊ฐ ๊ฐ์ ๊ณต์ ๊ฐ์<br>

4. pq๊ฐ ๋น๋๊น์ง ๋ฐ๋ณต(4~9)

5. pq์์ ๊ณต์ ๋นผ์ node์ ์ ์ฅ

6. ์ ์ ํ์ธํ ๊ณต๋ณด๋ค ํฌ๊ธฐ๊ฐ ์ปค์ก์ ๊ฒฝ์ฐ<br>
   6-1. sum์ ์ง์  ํฌ๊ธฐ์ ๊ณต ํฌ๊ธฐ ํฉ์ ๊ตฌํด ๋ํ๋ค<br>
   6-2. ์ง์  ๊ณต์ ๊ฐ์ ํฌ๊ธฐ, ๊ฐ์ ์ ๊ณต์ ํ์ธ์ด ์๋ฃ ๋์์ผ๋ฏ๋ก arr์ ํฌ๊ธฐ์ ํฉ์ ๊ตฌํด ๊ฐฑ์ ํ๋ค(arr[cur_c]+=cur_s\*cur_color_cnt)<br>
   6-3. ์๋ก์ด ํฌ๊ธฐ์ ๊ณต์ ํ์ธํ๊ธฐ ๋๋ฌธ์ ๋ณ์๋ค์ ์ด๊ธฐํ ์ํจ๋ค<br>
   6-4. cur_c์ ํ์ฌ ๊ณต์ ์ ๋ฒํธ๋ฅผ ์ ์ฅํ๋ค<br>
   6-5. cur_s์ ํ์ฌ ๊ณต์ ํฌ๊ธฐ๋ฅผ ์ ์ฅํ๋ค<br>

7. ์ ์ ํ์ธํ ๊ณต๊ณผ ํฌ๊ธฐ๊ฐ ๊ฐ๊ณ  ์์ด ๊ฐ์ ๊ฒฝ์ฐ<br>
   7-1. cur_color_cnt์ 1 ์ฆ๊ฐ์ํจ๋ค<br>

8. ์ง์ ์ ํ์ธํ ๊ณต๊ณผ ํฌ๊ธฐ๊ฐ ๊ฐ๊ณ  ์์ด ๋ค๋ฅธ ๊ฒฝ์ฐ<br>
   8-1. ์ง์  ๊ณต์ ๊ฐ์ ํฌ๊ธฐ, ๊ฐ์ ์ ๊ณต์ ํ์ธ์ด ์๋ฃ ๋์์ผ๋ฏ๋ก arr์ ํฌ๊ธฐ์ ํฉ์ ๊ตฌํด ๊ฐฑ์ ํ๋ค<br>
   8-2. cur_size_cnt์ cur_color_cnt๋ฅผ ๋ํ ํ cur_color_cnt๋ 1๋ก ์ด๊ธฐํํ๋ค<br>
   8-3. cur_c์ ํ์ฌ ๊ณต์ ์ ๋ฒํธ๋ฅผ ์ ์ฅํ๋ค<br>

9. ํ์ฌ ๊ณต์ ์๋ ฅ ์ธ๋ฑ์ค์ ๋ง๊ฒ result์ ๊ฒฐ๊ณผ๋ฅผ ์ ์ฅํ๋ค. ๊ฒฐ๊ณผ๋ sum์์ ํ์ฌ ๊ณต๊ณผ ๊ฐ์ ์์ ๊ณต ํฌ๊ธฐ๋ฅผ ๋บ ๊ฐ์ด๋ค(result[node.idx]=sum-arr[node.color])

10. result์ ์ ์ฅ๋ ๊ฒฐ๊ณผ๋ฅผ ์์ฐจ์ ์ผ๋ก ์ถ๋ ฅํ๋ค.

## ์ ์ฒด ์ฝ๋

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
