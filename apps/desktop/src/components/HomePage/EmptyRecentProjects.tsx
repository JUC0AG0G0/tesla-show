export function EmptyRecentProjects() {
    return (
        <div className="mt-10 flex flex-col items-center justify-center text-center">
            {/* IMAGE */}
            <div className="w-full max-w-xs mb-6">
                <img
                    src="/assets/img/empty-projects.png"
                    alt="No projects"
                    className="w-full h-auto opacity-90"
                />
            </div>

            <h3 className="text-xl font-semibold">
                No recent projects yet
            </h3>
        </div>
    );
}
