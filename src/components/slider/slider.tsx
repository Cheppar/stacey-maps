import { Slider } from '@mui/material';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import SliderProps from '../../models/slider';

const ModSlider = styled(Slider)`
  margin: 25px 0;
`;

const CustomSlider = ({label,updateInputs,inputs,symbol,disabled}: SliderProps): JSX.Element => {
    const marks = [
                      {
                        value: 0,
                        label: '0',
                      },
                      {
                        value: 100,
                        label: '100',
                      },
                    ]
  
    const handleSliderChange = (event: Event, newValue: number | number[]): void => {
       newValue !== 0 && updateInputs(label,newValue as number)
    };
  
    const stringFormatting = (text: string,symbol: undefined | string): string => {
      const string =  text
                      .replace(/([A-Z])/g, ' $1')
                      .replace(/^./, function(str){ return str.toLowerCase(); })
      return symbol ? string.concat(` ${symbol}`) : string
    }
  
    return (
      <>
        <Typography data-testid="slider-label" id="input-slider" variant="h6" gutterBottom>
          {stringFormatting(label,symbol)}
        </Typography>
        <ModSlider value={inputs[label]} 
                aria-label="Small" 
                disabled={disabled}
                valueLabelDisplay={disabled ? "off" : "on"}
                marks={marks}
                onChange={handleSliderChange}
                aria-labelledby="input-slider"
         />
      </>
    )
  }

export default CustomSlider