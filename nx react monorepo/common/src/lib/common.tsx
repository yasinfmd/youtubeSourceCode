import styles from './common.module.css';

/* eslint-disable-next-line */
export interface CommonProps {}

export function Common(props: CommonProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Common!</h1>
    </div>
  );
}

export default Common;
