import { Text } from "@chakra-ui/react";
import { Box, Button, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onChangePage: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number){
  return [...new Array(to - from)]
  .map((_, index) =>{
    return index + from + 1;
  })
  .filter((page) => page > 0);
}

export function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onChangePage,
}: PaginationProps) {
  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);

  const previousPages = currentPage > 1 
  ? generatePagesArray(currentPage - siblingsCount - 1 , currentPage -1)
  : [];

  const nextPages = currentPage < lastPage 
  ? generatePagesArray(currentPage , Math.min(currentPage + siblingsCount, lastPage))
  : [];



  return (
    <Stack direction={["column","row"]} mt="8" justify="space-between" align="center">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">

        { (currentPage > (siblingsCount + 1))
          && ( 
            <>
          <PaginationItem number={1} onPageChange={onChangePage}/>
          { currentPage > (2 + siblingsCount) && <Text color='gray.300' width="6" textAlign="center">...</Text>}
          </>
          )}
        
        { previousPages.length > 0 && previousPages.map((page) => {
          return <PaginationItem key={page} number={page} onPageChange={onChangePage}/>;
        })}

        <PaginationItem number={currentPage} isCurrent  onPageChange={onChangePage}/>
        
        { nextPages.length > 0 && nextPages.map((page) => {
          return <PaginationItem key={page} number={page} onPageChange={onChangePage}/>;
        })}

        { (currentPage + siblingsCount ) < lastPage
                  && ( 
                    <>
                    { (currentPage + 1 + siblingsCount) < lastPage && <Text color='gray.300' width="6" textAlign="center">...</Text>}
                  <PaginationItem number={lastPage} onPageChange={onChangePage}/>
                  </>)
        }

      </Stack>
    </Stack>
  );
}
