import React from "react";

function Pricing() {
  return (
    <div
      id="pricing"
      className="bg-white dark:bg-[#1e293b] text-gray-900 dark:text-[#e2e8f0] max-w-[950px] mx-auto p-6 my-8 rounded-lg shadow-lg"
    >
      <h1 className="text-2xl font-bold mb-4 pt-7 text-blue-600 dark:text-[#a4b4fd]">
        API Pricing
      </h1>
      <p className="text-base mb-6">
        Our API pricing is based on the model used and the number of tokens
        processed. Here's a breakdown of the costs:
      </p>
      <div className="overflow-x-auto rounded-md">
        <table className="min-w-full bg-white dark:bg-[#1e293b] text-gray-900 dark:text-[#e2e8f0] border border-gray-300 dark:border-gray-600 rounded-lg">
          <thead>
            <tr className="bg-blue-200 dark:bg-[#6367f0]">
              <th className="py-4 px-6 text-left border-b border-gray-300 dark:border-gray-500 border-opacity-50">
                API
              </th>
              <th className="py-4 px-6 text-left border-b border-gray-300 dark:border-gray-500 border-opacity-50">
                MODEL
              </th>
              <th className="py-4 px-6 text-left border-b border-gray-300 dark:border-gray-500 border-opacity-50">
                PRICE PER 1K TOKENS
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300 dark:border-gray-500 border-opacity-50">
              <td className="py-4 px-6">OpenAI</td>
              <td className="py-4 px-6">GPT-3.5</td>
              <td className="py-4 px-6">$0.002</td>
            </tr>
            <tr className="border-b border-gray-300 dark:border-gray-500 border-opacity-50">
              <td className="py-4 px-6">OpenAI</td>
              <td className="py-4 px-6">GPT-4</td>
              <td className="py-4 px-6">$0.03</td>
            </tr>
            <tr className="border-b border-gray-300 dark:border-gray-500 border-opacity-50">
              <td className="py-4 px-6">Together AI</td>
              <td className="py-4 px-6">Llama-2-70b</td>
              <td className="py-4 px-6">$0.0008</td>
            </tr>
            <tr className="border-b border-gray-300 dark:border-gray-500 border-opacity-50">
              <td className="py-4 px-6">Together AI</td>
              <td className="py-4 px-6">Llama-2-13b</td>
              <td className="py-4 px-6">$0.0006</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2 text-blue-600 dark:text-[#a4b4fd]">
          Token Estimation
        </h2>
        <p className="text-base mb-4">
          On average, 1 token is approximately 4 characters or 0.75 words. For
          precise pricing, we recommend using our token calculator tool.
        </p>
        <h2 className="text-xl font-semibold mb-2 text-blue-600 dark:text-[#a4b4fd]">
          Billing
        </h2>
        <p className="text-base">
          You will only be charged for the tokens used in generating the book.
          The API tracks token usage and bills accordingly. Detailed usage
          reports are available in your account dashboard.
        </p>
      </div>
    </div>
  );
}

export default Pricing;
