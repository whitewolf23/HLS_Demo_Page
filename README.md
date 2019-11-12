# HLS 프로토콜을 이용한 React 라이브러리 테스트 

## 목표 
- Chrome, Firefox, safari, IE11, Edge, iOS - Webkit 에서 구동여부를 파악한다. 

## 2019 11 12 업데이트
- 프록시 설정 비교를 위해, http-proxy-middleware 를통해 cloudfront 에 요청 처리


## 2019 11 11 업데이트 
- 일회성이 아닌 추후 업데이트를 계속한다.
- 이유는 새로운 HLS 기반 플레이어가 나올 가능성 염두.

# 확장프로그램 
- Chrome, Firefox 는  CORS 방지 확장 프로그램 설치 후 테스트 진행 



## 체크리스트
| 목차 | HLS-Player (HLS) | Shaka | Replay | Griffth | React Player  |
|:--------|:--------:|--------:|--------:|--------:|--------:|
| Chrome | O | X | O | X | 0 |
| Firefox | O | X | O |X | 0 |
| IE11 | -- | -- | -- | -- | -- |
| Safari | X | X | X | O | X |
| Edge | -- | -- | -- | O | -- |
| 1OS - Webkit | X | X | X | O | 0 |
