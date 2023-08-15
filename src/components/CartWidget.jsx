import {Box, Tag, TagRightIcon, TagLabel} from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const CartWidget = () => {
  return (
    <Box>
      <Tag variant='subtle' backgroundColor={"transparent"}>
        <TagLabel fontSize={20}>{0}</TagLabel>
        <TagRightIcon boxSize='20px' as={AiOutlineShoppingCart} />
      </Tag>
    </Box>
  )
}

export default CartWidget;