import './BackgroundCircles.css';

import { useWindowSize } from '../../utils/useWindowSize';

export default function BackgroundCircles() {
    const width = useWindowSize();

    return (
        <>
            {width > 500
                ?
                (
                    <>
                        <div className="circles__first" />
                        <div className="circles__second" />
                        <div className="circles__third" />
                        <div className="circles__fourth" />
                        <div className="circles__fifth" />
                    </>
                )
                :
                (
                    <>
                        <div className="circles__m-first" />
                        <div className="circles__m-second" />
                    </>
                )
            }

        </>
    )
}