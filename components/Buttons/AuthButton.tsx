import arrowRight from "@/public/ASSETS/ICONS/arrow-right.svg"
import Image from "next/image";


type AuthButtonProps = {
    text: string;
    active: boolean;
}

export const AuthButton = ({text , active}: AuthButtonProps) => {
    return(
        <div className="flex">
            <p>
                {text}
            </p>
            <div>
                <Image src={arrowRight} alt="arrow_right" />
            </div>
        </div>
    )
}


