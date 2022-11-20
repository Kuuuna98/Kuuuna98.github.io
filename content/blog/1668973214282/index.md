---
title: bj1759 피자 굽기 🍕
description: 풀이
category: category1
tags: [bj]
date: 2022-11-20T19:40:14.405Z
---

# [bj1759] 피자 굽기 🍕

| 소요 시간  | 메모리 | 시간:  |
| --- | --- | --- |
| 58분 | 82740 KB  | 500 ms |

## 문제 접근

오븐 위치마다 크기가 다르지만, 오븐의 상위 크기보다 클 경우는 소용이 없다.

![](./풀이이미지.png)

## 문제 풀이

1. 오븐의 깊이(D)와 피자반죽의 개수(N)를 입력받고, 정수형 1차원 배열 oven을 D+1의 크기로 정의한다

2. oven[0]에 정수의 최댓값을 저장한다

3. 오븐의 지름을 oven에 순차적으로 저장한다. 이때, 이전 오븐지름 크기와 현재 입력받는 지름크기 중 더 작은 값으로 저장한다

4. 입력으로 주어지는 피자의 지름을 확인하며, 오븐에 들어갈 수 있는지를 체크하기 위해 end 변수를 D+1로 초기화한다 (end: 현재 피자를 넣을 수 있는 오븐의 위치)

5. 피자 반죽 개수만큼 반복한다.<br>
   5-1. 피자의 지름을 입력받아 pizza에 저장한다<br>
   5-2. 피자를 넣었으므로 end를 1 줄인다<br>
   5-3. 피자 지름이 오븐 지름보다 같거나 작을 때까지 end(오븐의 위치)를 1씩 줄인다<br>
   5-4. end가 0이면 더이상 피자를 넣을 수 없다는 의미이므로 반복문을 빠져나온다<br>

6. end값을 출력한다

## 전체 코드

```java
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main_bj1759 {
    public static void main(String[] args) throws Exception {
        BufferedReader br =new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine()," ");
        int D = Integer.parseInt(st.nextToken());
        int N = Integer.parseInt(st.nextToken());
        int[] oven = new int[D+1];

        oven[0] = Integer.MAX_VALUE;
        st = new StringTokenizer(br.readLine()," ");
        for (int i = 1; i <= D; i++) {
            oven[i]=Math.min(oven[i-1],Integer.parseInt(st.nextToken()));
        }

        int end=D+1;
        st = new StringTokenizer(br.readLine()," ");
        for (int i=0; i < N; i++) {
            int pizza = Integer.parseInt(st.nextToken());
            end--;
            for(;0<end;end--){
                if(pizza<=oven[end]){
                    break;
                }
            }
            if(end==0) break;
        }
        System.out.print(end);
        br.close();
    }
}
```
