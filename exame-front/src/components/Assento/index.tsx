import { Box, Button, TextField, Tooltip } from "@mui/material";
import { IAssento } from "../../@types";

import './style.css';

type AssentoProps = {
    assento: IAssento,
    onClick: (assento: IAssento) => void
}
export function Assento({
    assento,
    onClick
}: AssentoProps) {
    return (
        <Tooltip title={assento.passageiro} arrow>
            <Box 
                className="assento"
                style={
                    {marginRight: ((assento.numero % 2 === 0)&&(assento.numero %4 !== 0)) ? 'auto' : ''}
                }>
                
                <Button                
                    className="button-assento"
                    variant="outlined"
                    onClick={() => onClick(assento)}
                    disabled={assento}>
                    {assento.numero}
                </Button>
                
            </Box>
        </Tooltip>  

    )
}