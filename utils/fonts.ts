import { Ubuntu , Inter } from "@next/font/google";

export const ubuntu = Ubuntu({
    subsets:['latin'],
    weight:"400",
    variable:"--font-ubuntu"
})

export const inter = Inter({
    subsets: ['latin'],
    weight: "400",
    variable: "--font-inter"

})

export const ubuntuLight = Ubuntu({
    subsets: ['latin'],
    weight: "300",
    variable: "--font-ubuntu-light"
})