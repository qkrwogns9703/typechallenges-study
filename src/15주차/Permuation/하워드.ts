/**
 * <T, K=T> 입력되는 제네릭의 복제본을 미리 만들어놓는 방식 (입력된 원본 타입을 변형 후 원본과 비교하기 위해 자주 사용됨)
 * 타입스크립트는 제네릭에 유니온 타입이 들어올 시, 분배법칙을 사용함.
 * never는 유니온 타입임.
 * 타입을 배열로 감싸면 유니온타입이 아니게 되므로 분배법칙이 막힘.
 * [T] extends [never] : never 체크 방식 (분배법칙을 막는 방법을 응용)
 */
type Permutation<T, C=T> = [T] extends [never] ? [] : (T extends C ? [T, ...Permutation<Exclude<C, T>>] : []);

type perm = Permutation<'A' | 'B' | 'C'>; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']

type test = Exclude<string|number, string|number>