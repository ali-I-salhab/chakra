import { Card, Skeleton, CardBody, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card borderRadius={"12px"} overflow={"hidden"}>
      <Skeleton height={"200px"}></Skeleton>

      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
