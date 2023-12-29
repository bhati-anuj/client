import React from 'react'

const TermsCard = () => {
  return (
    <div className='p-6 '>
        <div>
            <label>Term & Condition</label>
            <textarea className="py-3 px-4 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600" rows="3" placeholder="Term & Condition"></textarea>
        </div>
        <div>
            <label>Return Policy</label>
            <textarea className="py-3 px-4 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600" rows="3" placeholder="Return Policy"></textarea>
        </div>
    </div>
  )
}

export default TermsCard