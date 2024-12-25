import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import PersonalLogo from "@/public/personal-logos/personal-logo-v1.png";

const Logo = () => {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <div className="relative w-full h-full">
          <Image
            src={PersonalLogo}
            fill
            alt="personal-logo"
            className="rounded-md object-cover transform group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
    </Button>
  );
};

export default Logo;
