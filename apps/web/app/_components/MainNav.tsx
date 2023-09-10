import { AuthButton } from "./nav/AuthButton";
import { Link } from "./nav/Link";

export default function MainNav() {
    return (
        <div className="bg-white text-black">
            <div className="container mx-auto px-4">
                <div className="flex flex-row">
                    <Link href="/">Home</Link>
                    <Link href="/protected">Protected</Link>
                    <Link href="/skills">Skills</Link>
                    <div className="flex grow justify-end">
                        <AuthButton />
                    </div>
                </div>
            </div>
        </div>
    );
}
