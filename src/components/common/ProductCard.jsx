import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "../ui/Card"
import Button from "../ui/Button"

export const ProductCard = ({title, price, description, image}) => {
    return (
        <Card className="overflow-hidden">
            <div className="relative h-48 w-full">
                <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>
            <div className="h-75">
                <CardHeader className="mt-20">
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-green-600 font-semibold">{price}</CardDescription>
                </CardHeader>
                <CardContent className="mt-4">
                    <p className="text-gray-600">
                        {description}
                    </p>
                </CardContent>
                <CardFooter>
                    <Button>Saiba mais</Button>
                </CardFooter>
            </div>
        </Card>
    )
}