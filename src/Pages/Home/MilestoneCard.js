import React from 'react';

const MilestoneCard = ({ milestone }) => {
    const { title, description, vedios, duration } = milestone
    return (
        <div
            className="relative block overflow-hidden rounded-lg border border-red-100 p-8"
        >
            <span
                className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
            ></span>

            <div className="justify-between sm:flex">
                <div>
                    <h3 className="text-lg text-gray-900">
                        {title}
                    </h3>
                </div>


            </div>

            <div className="mt-4 sm:pr-8">
                <p className="text-sm text-gray-500">
                    {description}
                </p>
            </div>

            <dl className="mt-6 flex justify-between">
                <div className="flex flex-col">
                    <dt className="text-sm font-medium text-gray-600">মোট ভিডিও</dt>
                    <dd className="text-xs text-gray-500">{vedios}</dd>
                </div>

                <div className="ml-3 flex flex-col sm:ml-6">
                    <dt className="text-sm font-medium text-gray-600">মোট সময়কাল</dt>
                    <dd className="text-xs text-gray-500">{duration}</dd>
                </div>
            </dl>
        </div>

    );
};

export default MilestoneCard;