/**
 * 16주차의 Flatten과 LengthOfString 두 타입 모두 제네릭 두번째 인자로 임의의 빈배열 타입을 만든 후
 * 입력된 첫번째 인자를 재귀쩍으로 두부분으로 쪼개서 빈배열 타입에 채워넣는 방식을 사용.
 * 분할 정복 알고리즘으로 봐도 될듯?
 */

type Flatten<T extends unknown[], A extends unknown[] = []> = T extends [infer before, ...infer rest] ?
    before extends unknown[] ? Flatten<[...before, ...rest], A> : Flatten<[...rest], [...A, before]> : A;

type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]

const result:Flatten<[1, 2, [3, 4], [[[5]]]]> = [1,2,3,4,5];