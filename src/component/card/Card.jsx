import React from 'react'


export default function Card({ laptopName, Description, photo }) {
    return (
        <div>
            <div className="w-[300px] rounded-md border max-w-md mx-auto bg-gray-200 p-4 mt-4">
                <img
                    src={photo || "https://img.freepik.com/free-vector/coming-soon-text-grunge-background_91128-1643.jpg"}
                    alt="Laptop"
                    className="h-[200px] w-full rounded-md object-cover"
                />
                <div className="p-4">
                    <h1 className="text-lg font-semibold">{ laptopName ||"Coming soon"}</h1>
                    <p className="mt-3 text-sm text-gray-600">
                        {Description || "Coming soon"}
                    </p>
                    <button
                        type="button"
                        className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Read
                    </button>
                </div>
            </div>

        </div>
    )
}
