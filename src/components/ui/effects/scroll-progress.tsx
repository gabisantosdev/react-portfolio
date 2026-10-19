import { motion, useScroll } from 'motion/react';
import { css } from '~/css';

export default function ScrollProgress() {
	const { scrollYProgress } = useScroll();

	return (
		<motion.div
			className={css({
				backgroundColor: 'gabiBlue.600',
			})}
			id='scroll-indicator'
			style={{
				scaleX: scrollYProgress,
				position: 'fixed',
				top: 0,
				left: 0,
				right: 0,
				height: 2,
				originX: 0,
				zIndex: 9999,
			}}
		/>
	);
}
