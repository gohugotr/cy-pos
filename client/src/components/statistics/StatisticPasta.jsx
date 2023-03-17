import { Pie } from '@ant-design/plots'

const StatisticPasta = () => {
  const dataPasta = [
    {
      tip: 'Çocuk',
      deger: 27,
    },
    {
      tip: 'Baba',
      deger: 25,
    },
    {
      tip: 'Anne',
      deger: 18,
    },
    {
      tip: 'Evlat',
      deger: 15,
    },
    {
      tip: 'Hala',
      deger: 10,
    },
    {
      tip: 'Dayı',
      deger: 5,
    },
  ]
  const configPasta = {
    appendPadding: 10,
    data: dataPasta,
    angleField: 'deger',
    colorField: 'tip',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{deger}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: 'Cy-POS',
      },
    },
  }
  return <Pie {...configPasta} />;
};

export default StatisticPasta
