import { useModalHandle } from 'contexts/ModalContext';
import styles from '../Controller.module.css';

const AddHabitBtn = () => {
  //  TODO
  //  모달 만들고 나면 create 모달임을 action type에 넣어 전달한다.

  const toggleModal = useModalHandle();

  return (
    <button
      className={`${styles.AddHabitBtn} AddHabitBtnLayout`}
      onClick={toggleModal}
    >
      + 습관 추가하기
    </button>
  );
};

export default AddHabitBtn;
