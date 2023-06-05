import React from 'react';
import { View, Text } from 'native-base';

import times from "../../../model/db/times.json"
import { ITimeInfo } from '../../../model/interfaces/timesInterface';

let timesInfo: ITimeInfo[] = times.response

const Times = (props: any) => {
    const [timeInfo, setTimeInfo] = React.useState<ITimeInfo[]>([]);
    React.useEffect(() => {
        setTimeInfo(timesInfo);
    }, []);

  return (
    <View flex={1} backgroundColor={'#22333B'}>
      <Text>Times</Text>
    </View>
  );
};

export default Times;
