'use client'
import { useRef } from 'react'
import Image from './Image'
import Link from './Link'
import useTruncatedElement from 'hooks/useTruncate'

const Card = ({ title, description, imgSrc, href }) => {
  const ref = useRef(null)
  const { isTruncated, isShowingMore, toggleIsShowingMore } = useTruncatedElement({
    ref,
  })
  return (
    <div className="md max-w-[544px] p-4 md:w-1/2">
      <div
        className={`${
          imgSrc && 'h-full'
        }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
      >
        {imgSrc &&
          (href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              <Image
                alt={title}
                src={imgSrc}
                className="md:h-36 lg:h-48 object-contain object-center"
                width={544}
                height={306}
              />
            </Link>
          ) : (
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          ))}
        <div className="p-6">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
            {href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
          <p
            ref={ref}
            className={`prose text-xl mb-3 max-w-none text-gray-900 dark:text-white ${
              !isShowingMore && 'line-clamp-4'
            }`}
          >
            {description.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </p>
          <p className="pb-2">
            {isTruncated && (
              <button
                onClick={toggleIsShowingMore}
                className="text-xl font-medium leading-6 text-[#047eb6]  hover:text-[#024b7a] dark:text-primary-500 dark:hover:text-primary-400"
              >
                {isShowingMore ? 'See less' : 'See more'}
              </button>
            )}
          </p>
          {href && (
            <Link
              href={href}
              className="text-xl font-medium leading-6 text-[#047eb6]  hover:text-[#024b7a] dark:text-primary-500 dark:hover:text-primary-400"
              aria-label={`Link to ${title}`}
            >
              Learn more &rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card
