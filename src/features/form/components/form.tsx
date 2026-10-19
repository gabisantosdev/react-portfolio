import type { ComponentProps } from 'react';
import { css } from '~/css';

const FormStyle = css({
	display: 'flex',
	flexDirection: 'column',
	gap: '20px',

	width: 'full',
});

export default function Form({ children }: ComponentProps<'form'>) {
	return <form className={FormStyle}>{children}</form>;
}
