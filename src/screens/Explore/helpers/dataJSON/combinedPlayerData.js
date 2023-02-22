import data1 from './1.json'
import data2 from './2.json'
import data3 from './3.json'
import data4 from './4.json'
import data5 from './5.json'
import data6 from './6.json'
import data7 from './7.json'
import data8 from './8.json'
import data9 from './9.json'
import data10 from './10.json'
import data11 from './11.json'
import data12 from './12.json'
import data13 from './13.json'
import data14 from './14.json'
import data15 from './15.json'
import data16 from './16.json'
import data17 from './17.json'
import data18 from './18.json'
import data19 from './19.json'
import data20 from './20.json'
import data21 from './21.json'
import data22 from './22.json'
import data23 from './23.json'
import data24 from './24.json'
import data25 from './25.json'
import data26 from './26.json'
import data27 from './27.json'
import data28 from './28.json'
import data29 from './29.json'
import data30 from './30.json'
import data31 from './31.json'
import data32 from './32.json'
import data33 from './33.json'
import data34 from './34.json'
import data35 from './35.json'

const data = []

data.push(data1)
data.push(data2)
data.push(data3)
data.push(data4)
data.push(data5)
data.push(data6)
data.push(data7)
data.push(data8)
data.push(data9)
data.push(data10)
data.push(data11)
data.push(data12)
data.push(data13)
data.push(data14)
data.push(data15)
data.push(data16)
data.push(data17)
data.push(data18)
data.push(data19)
data.push(data20)
data.push(data21)
data.push(data22)
data.push(data23)
data.push(data24)
data.push(data25)
data.push(data26)
data.push(data27)
data.push(data28)
data.push(data29)
data.push(data30)
data.push(data31)
data.push(data32)
data.push(data33)
data.push(data34)
data.push(data35)

var combinedPlayerData = []

for (var i = 0; i < data.length; i++) {
  const player = data[i].response.map((item) => item)
  combinedPlayerData.push(...player)
}

export default combinedPlayerData
