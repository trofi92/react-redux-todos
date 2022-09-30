// import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter
      number={number}
      onIncrease={increase}
      onDecrease={decrease}
    />
  );
};

/*ver 4.0 : 두번째 파라미터(increase, decrease)를 객체 형태로 넣어주면 
connect함수가 내부적으로 bindActionCreators 작업을 대신해줌*/
export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  {
    increase,
    decrease,
  }
)(CounterContainer);

// ver 1.0 : 일반적
// const mapStateToProps = (state) => ({
//   number: state.counter.number, // redux store 내부의 state를 props롤 넘겨줌
// });
// const mapDispatchToProps = (dispatch) => ({
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });                                       // redux store 내부의 '액션 생성 함수'를 props로 넘겨줌

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(CounterContainer);

// ver 2.0 : anonymous function
// export default connect(
//   (state) => ({
//     number: state.counter.number,
//   }),
//   (dispatch) => ({
//     increase: () => dispatch(increase()), // = increase: () => {return dispatch(increase())}
//     decrease: () => dispatch(decrease()), // = decrease: () => {return dispatch(decrease())}
//   })
// )(CounterContainer);

//ver 3.0 : using  bindActionCreator
// export default connect(
//   (state) => ({
//     number: state.counter.number,
//   }),
//   (dispatch) =>
//     bindActionCreators(
//       {
//         increase,
//         decrease,
//       },
//       dispatch
//     )
// )(CounterContainer);
