import { AuthButton } from "./nav/AuthButton";

export default function MainNav() {
    return (
        <div className="bg-white text-black">
            <div className="container mx-auto px-4">
                <div className="flex flex-col">
                    <div className="self-end">
                        <AuthButton />
                    </div>
                </div>
            </div>
        </div>
    );
}
