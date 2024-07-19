import { Icon } from 'shared';
import css from './AddWaterBtn.module.css';
import { useModal } from 'context';
import WaterModal from '../../modal/WaterModal/WaterModal';
import clsx from 'clsx';

const AddWaterBtn = ({ className }) => {
  const { openModal } = useModal();
  const handleClick = () => {
    openModal(<WaterModal type={'add'} />);
  };

  return (
    <div className={css[className]}>
      <button
        type="button"
        className={clsx(css.addWaterBtn, 'tour-add-water')}
        onClick={handleClick}
      >
        <div className={css.iconPlusWrap}>
          <Icon iconId="icon-plus" className={css.iconPlus} />
        </div>
        Add water
      </button>
    </div>
  );
};

export default AddWaterBtn;
