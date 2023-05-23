import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import HelloWorld from '~/components/helloworld';


export default component$(() => {
  return (
    <>
    <HelloWorld text='Merhaba' worldText='Deneme'>
      <h3 q:slot='titleSlot'>Ben title slotda görüneceğim</h3>
      <h1>Ben bir props children</h1>

      </HelloWorld>
      <h1>Hi 👋</h1>
      <p>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </p>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
