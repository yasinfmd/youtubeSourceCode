import styles from './hello-world.module.css';
import MyNewApp from '@mymonorepoapp/my-new-app';


/* eslint-disable-next-line */
export interface HelloWorldProps {}

export function HelloWorld(props: HelloWorldProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to HelloWorld!</h1>
      <MyNewApp />
    </div>
  );
}

export default HelloWorld;
