##레이아웃
transition
transform
scroll-snap-###(snap, align...)
data-parallax

viewport로 모바일 버전 만들 수 있음

@media screen and (min-width: 700px) {
	스크린이 700보다 작을 때는 위에 적어놓은 css를 적용, 클 때는 이 안({ })에 적어
	놓은 css를 적용함
}

display: block, inline, inline-block, flex...

기본적으로 block을 사용해서 박스로 레이아웃을 만든다.

태그 중에 기본적으로 block을 지원하는 <div>, <section>...등이 있다
<span>은 inline을 지원한다

##display: flex
display: flex는 레이아웃을 만들 많은 기능을 지원함

justify-content, align-content, align-items등등 정렬하기 편함

flex-direction: 방향 결정 기본은 rows 외에는 column, rows-reverse, column-reverse

flex-grow: 화면의 여백을 비율로 나눠갖음

flex-basis: 0, auto : 화면을 비율로 나눠갖음

align-self와 align-items의 차이:
self는 각각의 아이템에서 위치를 지정(하나씩 바꿀 때)
items 포괄적인 범위에서 아이템들의 위치를 지정(한번에 바꿀 때)

##display: grid
grid-template-columns: 40% 60%(**4fr 6fr**)
grid-template-columns: repeat(3, 1fr) = 1fr 1fr 1fr
아이템들이 비율만큼 나눠갖음(파라미터 갯수가 row의 갯수)

grid-gap: 여백 크기 줌

gird-auto-rows: 아이템들의 height지정
grid-auto-rows: minmax(200px, auto) 는 한 열이 200px이상이면 그 열만 자동으로 증가함

gird는 justify-items, align-items, justify-self를 할 수 있음

align은 축의 수직 방향 justify는 축의 수평 방향

grid-column: 1/4 1번부터 4번까지 차지하라(row도 마찬가지)