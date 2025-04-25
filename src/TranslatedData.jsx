import React from "react";

export default function TranslatedData({response} ) {
    return(
        <div className="w-full h-50 p-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400">
            {response}
        </div>
    )
}