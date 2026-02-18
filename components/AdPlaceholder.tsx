export default function AdPlaceholder() {
    return (
        <div className="my-8 flex w-full flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 bg-gray-50 p-6 text-center dark:border-gray-700 dark:bg-gray-900">
            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                Advertisement Space
            </p>
            <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
                Checking availability...
            </p>
        </div>
    );
}
