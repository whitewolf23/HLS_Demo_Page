# HLS 프로토콜을 이용한 React 라이브러리 테스트 

## 목표 
- Chrome, Firefox, Safari, IE11, Edge, iOS - Webkit 에서 구동여부를 파악한다. 

## 브라우저 지원 
- html5test.com 이라는 곳에서 브라우저의 지원여부를 알 수 있다.

## HLS 지원여부 
- Safari, Edge 브라우저는 Hls 가 지원하므로 주소창이나 .m3u8 링크를 실행 가능 

## 이외 브라우져 
- Chrome, Firefox는 Hls 를 지원하지 않기 때문에, 라이브러리를 이용하여 구현 필요
- 여기서 CORS 문제가 발생 -> Proxy로 해결 가능 -> 서버측에서 Access-Control-Allow-Origin 를 해결해 주면된다. 

---
# 업데이트 
## 2019 11 13 (수) 업데이트 
- Netlify 를 이용한 정적호스팅 -> cors 문제 발생 -> 방법 찾는 중.
- cors는 api 서버 혹은 브라우저 단에서 발생 

## 2019 11 12 (화) 업데이트
- 프록시 설정 비교를 위해, http-proxy-middleware 를통해 Cloudfront 에 요청 처리


## 2019 11 11 (월) 업데이트 
- 일회성이 아닌 추후 업데이트를 계속한다.
- 이유는 새로운 HLS 기반 플레이어가 나올 가능성 염두.

# 확장프로그램 
- Chrome, Firefox 는  CORS 방지 확장 프로그램 설치 후 테스트 진행 



## 체크리스트 (Chrome, Firefox 확장프로그램 이용) -> 재수정 필요
| 목차 | HLS-Player (HLS) | Shaka | Replay | Griffth | React Player  |
|:--------|:--------:|--------:|--------:|--------:|--------:|
| Chrome | O | X | O | X | 0 |
| Firefox | O | X | O |X | 0 |
| IE11 | -- | -- | -- | -- | -- |
| Safari | X | X | X | O | X |
| Edge | -- | -- | -- | O | -- |
| 1OS - Webkit | X | X | X | O | 0 |
