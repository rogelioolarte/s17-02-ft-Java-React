import { Card, CardBody, Typography } from "@material-tailwind/react";

export function HomeSection() {
  return (
    <section className="lg:py-18 py-8 px-8 max-h-screen">
      <div className="container mx-auto mb-10 text-center lg:mb-20">
        <Typography
          color="blue-gray"
          className="mb-4 !text-2xl font-bold lg:!text-4xl"
        >
          Turn your idea into a startup
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto max-w-lg !text-gray-500"
        >
          We&apos;re constantly trying to express ourselves and actualize our
          dreams. If you have the opportunity to play
        </Typography>
      </div>
      <div className="mb-8 container mx-auto grid lg:gap-x-8 gap-y-8 grid-cols-1 lg:grid-cols-3">
        <Card
          className="col-span-1 bg-gray-100/50 overflow-hidden"
          shadow={false}
        >
          <CardBody className="text-center">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Mix and Match
            </Typography>
            <Typography className="text-center mb-0 max-w-xs mx-auto text-base font-normal leading-7 !text-gray-500">
              We get insulted by others, lose trust for those We get back.
            </Typography>
          </CardBody>
        </Card>
        <Card
          className="col-span-2 bg-gray-100/50 overflow-hidden"
          shadow={false}
        >
          <CardBody className="text-center">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Modular Components
            </Typography>
            <Typography className="text-center mb-0 max-w-xs mx-auto text-base font-normal leading-7 !text-gray-500">
              It becomes harder for us to give others hand. We get our heart by
              people we love.
            </Typography>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
export default HomeSection;