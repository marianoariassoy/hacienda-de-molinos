import { languages } from '../data/data'

const Languages = () => {
  return (
    <nav>
      <ul className='flex gap-x-1 [&>li>button:hover]:underline [&>li>button]:decoration-2 [&>li>button]:underline-offset-4 [&>li:last-child]:hidden text-sm'>
        {languages.map((language, index) => (
          <>
            <li key={index}>
              <button>{language.title}</button>
            </li>
            <li>/</li>
          </>
        ))}
      </ul>
    </nav>
  )
}

export default Languages
