import { useState, useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { FlipBook } from 'react-pageflip';

type MangaBookProps = {
    children: React.ReactNode;
}

const MangaBook = ({children}: MangaBookProps) => {
    const bookRef = useRef<FlipBook>(null);
    const [currentPage, setCurrentPage] = useState(0);

    // Page Flipping Logic
    const flipToNext = () => {
        bookRef.current?.pageFlip()?.flipNext()
    };
    const flipToPrev = () => {
        bookRef.current?.pageFlip()?.flipPrev()
    };

    return(
        <div className = "flex flex-col items-center h-screen bg-gray-50">
            <HTMLFlipBook
                ref={bookRef}

                // Page Dimensions
                width={550}
                height={700}

                // Styling and Animation
                size="fixed"
                drawingTension={0.5}
                flippingTime={1500}
                usePortrait={false}
                showCover={true}

                // Event handler
                onFlip={(e: number) => {
                    setCurrentPage(e);
                    console.log("Flipped to page: ", e);
                }}
                className = "shadow-2xl"
                >
                {children}
            </HTMLFlipBook>
            <div className = "flex space-x-4 mt-8">
                <button onClick = {flipToPrev} className = "">
                    &larr; Prev Chapter
                </button>
                <button onClick = {flipToNext} className = "">
                    Next Chapter &rarr;
                </button>
            </div>
        </div>
    );
};

export default MangaBook;