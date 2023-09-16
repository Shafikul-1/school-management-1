<script setup> 
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Slider from '../../components/Slider.vue';
import Navbar from '../../components/Navbar.vue';
import LeftSideView from '../Home/LeftSideView.vue';
import RightSideView from '../Home/RightSideView.vue';
import Footer from '../../components/Footer.vue';

// data fatch url
const studentResultSheet = ref([])
const isloading = ref(true)
onMounted(async () => {
   try {
    const url = 'https://raw.githubusercontent.com/Shafikul-1/school-management-1/master/data/class-result.json'
    const response = await axios.get(url)
    const result = response.data
    console.log(result.ResultAll)
    studentResultSheet.value = result.ResultAll
    isloading.value = false
   } catch (error) {
    console.error('Your Error => ' + error)
   }
})

// const studentResultSheet = ref([
//     {
//         id: 1,
//         name: 'Md Shafikul Islam',
//         image: 'https://cdn.pixabay.com/photo/2016/06/15/16/16/man-1459246_1280.png',
//         result: '2 hours age',
//         updateResult: '1 hours age',
//         totalMarks: 8500,
//         markAvarage: 85,
//         markDescription: 'Total mark avarage:',
//         subject: [
//             {
//                 id: 1,
//                 name: 'English',
//                 markAndAnswer: {
//                     totalMarks: 100,
//                     worng: 20
//                 },
//                 question: [
//                     {
//                         id: 1,
//                         name: 'whats Your name?',
//                         answer: 'my name is shafikul'
//                     },
//                     {
//                         id: 2,
//                         name: 'your fevarit teacher name',
//                         answer: 'my fevarit teacher name runjila'
//                     },
//                     {
//                         id: 3,
//                         name: 'Whats Your mother name',
//                         answer: 'my mother name is sabina'
//                     },
//                     {
//                         id: 4,
//                         name: 'whats Your class name?',
//                         answer: 'my name is high school'
//                     },
//                     {
//                         id: 5,
//                         name: 'your fevarit master name',
//                         answer: 'my fevarit teacher name hanif'
//                     },
//                     {
//                         id: 6,
//                         name: 'Whats Your GirlFrined name',
//                         answer: 'my mother name is runjila'
//                     }
//                 ],
//                 explanQuestion: {
//                     correct : [
//                         {
//                             id:1,
//                             name: 'whats Your name?',
//                             ans: 'worng'
//                         },
//                         {
//                             id:2,
//                             name: 'your fevarit teacher name?',
//                             ans: 'correct'
//                         },
//                         {
//                             id:3,
//                             name: 'Whats Your mother name?',
//                             ans: 'worng'
//                         }
//                     ],
//                     worng: [
//                         {
//                             id:1,
//                             name: 'whats Your class name?',
//                             answer: 'worng'
//                         },
//                         {
//                             id:2,
//                             name: 'your fevarit master name',
//                             answer: 'correct'
//                         },
//                         {
//                             id:3,
//                             name: 'Whats Your GirlFrined name',
//                             answer: 'correct'
//                         }
//                     ]
//                 }
//             },
//             {
//                 id: 2,
//                 name: 'Bangla',
//                 markAndAnswer: {
//                     totalMarks: 100,
//                     worng: 71
//                 },
//                 question: [
//                     {
//                         id: 1,
//                         name: 'whats Your name?',
//                         answer: 'my name is shafikul'
//                     },
//                     {
//                         id: 2,
//                         name: 'your fevarit teacher name',
//                         answer: 'my fevarit teacher name runjila'
//                     },
//                     {
//                         id: 3,
//                         name: 'Whats Your mother name',
//                         answer: 'my mother name is sabina'
//                     },
//                     {
//                         id: 4,
//                         name: 'whats Your class name?',
//                         answer: 'my name is high school'
//                     },
//                     {
//                         id: 5,
//                         name: 'your fevarit master name',
//                         answer: 'my fevarit teacher name hanif'
//                     },
//                     {
//                         id: 6,
//                         name: 'Whats Your GirlFrined name',
//                         answer: 'my mother name is runjila'
//                     }
//                 ],
//                 explanQuestion: {
//                     correct : [
//                         {
//                             id:1,
//                             name: 'whats Your name?',
//                             ans: 'worng'
//                         },
//                         {
//                             id:2,
//                             name: 'your fevarit teacher name?',
//                             ans: 'correct'
//                         },
//                         {
//                             id:3,
//                             name: 'Whats Your mother name?',
//                             ans: 'worng'
//                         }
//                     ],
//                     worng: [
//                         {
//                             id:1,
//                             name: 'whats Your class name?',
//                             answer: 'worng'
//                         },
//                         {
//                             id:2,
//                             name: 'your fevarit master name',
//                             answer: 'correct'
//                         },
//                         {
//                             id:3,
//                             name: 'Whats Your GirlFrined name',
//                             answer: 'correct'
//                         }
//                     ]
//                 }
//             },
//             {
//                 id: 3,
//                 name: 'Somaj Biggan',
//                 markAndAnswer: {
//                     totalMarks: 100,
//                     worng: 60
//                 },
//                 question: [
//                     {
//                         id: 1,
//                         name: 'whats Your name?',
//                         answer: 'my name is shafikul'
//                     },
//                     {
//                         id: 2,
//                         name: 'your fevarit teacher name',
//                         answer: 'my fevarit teacher name runjila'
//                     },
//                     {
//                         id: 3,
//                         name: 'Whats Your mother name',
//                         answer: 'my mother name is sabina'
//                     },
//                     {
//                         id: 4,
//                         name: 'whats Your class name?',
//                         answer: 'my name is high school'
//                     },
//                     {
//                         id: 5,
//                         name: 'your fevarit master name',
//                         answer: 'my fevarit teacher name hanif'
//                     },
//                     {
//                         id: 6,
//                         name: 'Whats Your GirlFrined name',
//                         answer: 'my mother name is runjila'
//                     }
//                 ],
//                 explanQuestion: {
//                     correct : [
//                         {
//                             id:1,
//                             name: 'whats Your name?',
//                             ans: 'worng'
//                         },
//                         {
//                             id:2,
//                             name: 'your fevarit teacher name?',
//                             ans: 'correct'
//                         },
//                         {
//                             id:3,
//                             name: 'Whats Your mother name?',
//                             ans: 'worng'
//                         }
//                     ],
//                     worng: [
//                         {
//                             id:1,
//                             name: 'whats Your class name?',
//                             answer: 'worng'
//                         },
//                         {
//                             id:2,
//                             name: 'your fevarit master name',
//                             answer: 'correct'
//                         },
//                         {
//                             id:3,
//                             name: 'Whats Your GirlFrined name',
//                             answer: 'correct'
//                         }
//                     ]
//                 }
//             }
//         ]
//     },
//     {
//         id: 2,
//         name: 'Sundory Begum',
//         image: 'https://cdn.pixabay.com/photo/2015/01/08/18/30/entrepreneur-593371_1280.jpg',
//         result: '2 hours age',
//         updateResult: '1 hours age',
//         totalMarks: 4500,
//         markAvarage: 40,
//         markDescription: 'Total mark avarage:',
//         subject: [
//             {
//                 id: 1,
//                 name: 'English',
//                 markAndAnswer: {
//                     totalMarks: 100,
//                     worng: 56
//                 },
//                 question: [
//                     {
//                         id: 1,
//                         name: 'whats Your name?',
//                         answer: 'my name is shafikul'
//                     },
//                     {
//                         id: 2,
//                         name: 'your fevarit teacher name',
//                         answer: 'my fevarit teacher name runjila'
//                     },
//                     {
//                         id: 3,
//                         name: 'Whats Your mother name',
//                         answer: 'my mother name is sabina'
//                     },
//                     {
//                         id: 4,
//                         name: 'whats Your class name?',
//                         answer: 'my name is high school'
//                     },
//                     {
//                         id: 5,
//                         name: 'your fevarit master name',
//                         answer: 'my fevarit teacher name hanif'
//                     },
//                     {
//                         id: 6,
//                         name: 'Whats Your GirlFrined name',
//                         answer: 'my mother name is runjila'
//                     }
//                 ],
//                 explanQuestion: {
//                     correct : [
//                         {
//                             id:1,
//                             name: 'whats Your name?',
//                             ans: 'worng'
//                         },
//                         {
//                             id:2,
//                             name: 'your fevarit teacher name?',
//                             ans: 'correct'
//                         },
//                         {
//                             id:3,
//                             name: 'Whats Your mother name?',
//                             ans: 'worng'
//                         }
//                     ],
//                     worng: [
//                         {
//                             id:1,
//                             name: 'whats Your class name?',
//                             answer: 'worng'
//                         },
//                         {
//                             id:2,
//                             name: 'your fevarit master name',
//                             answer: 'correct'
//                         },
//                         {
//                             id:3,
//                             name: 'Whats Your GirlFrined name',
//                             answer: 'correct'
//                         }
//                     ]
//                 }
//             },
//             {
//                 id: 2,
//                 name: 'Bangla',
//                 markAndAnswer: {
//                     totalMarks: 100,
//                     worng: 34
//                 },
//                 question: [
//                     {
//                         id: 1,
//                         name: 'whats Your name?',
//                         answer: 'my name is shafikul'
//                     },
//                     {
//                         id: 2,
//                         name: 'your fevarit teacher name',
//                         answer: 'my fevarit teacher name runjila'
//                     },
//                     {
//                         id: 3,
//                         name: 'Whats Your mother name',
//                         answer: 'my mother name is sabina'
//                     },
//                     {
//                         id: 4,
//                         name: 'whats Your class name?',
//                         answer: 'my name is high school'
//                     },
//                     {
//                         id: 5,
//                         name: 'your fevarit master name',
//                         answer: 'my fevarit teacher name hanif'
//                     },
//                     {
//                         id: 6,
//                         name: 'Whats Your GirlFrined name',
//                         answer: 'my mother name is runjila'
//                     }
//                 ],
//                 explanQuestion: {
//                     correct : [
//                         {
//                             id:1,
//                             name: 'whats Your name?',
//                             ans: 'worng'
//                         },
//                         {
//                             id:2,
//                             name: 'your fevarit teacher name?',
//                             ans: 'correct'
//                         },
//                         {
//                             id:3,
//                             name: 'Whats Your mother name?',
//                             ans: 'worng'
//                         }
//                     ],
//                     worng: [
//                         {
//                             id:1,
//                             name: 'whats Your class name?',
//                             answer: 'worng'
//                         },
//                         {
//                             id:2,
//                             name: 'your fevarit master name',
//                             answer: 'correct'
//                         },
//                         {
//                             id:3,
//                             name: 'Whats Your GirlFrined name',
//                             answer: 'correct'
//                         }
//                     ]
//                 }
//             },
//             {
//                 id: 3,
//                 name: 'Somaj Biggan',
//                 markAndAnswer: {
//                     totalMarks: 100,
//                     worng: 95
//                 },
//                 question: [
//                     {
//                         id: 1,
//                         name: 'whats Your name?',
//                         answer: 'my name is shafikul'
//                     },
//                     {
//                         id: 2,
//                         name: 'your fevarit teacher name',
//                         answer: 'my fevarit teacher name runjila'
//                     },
//                     {
//                         id: 3,
//                         name: 'Whats Your mother name',
//                         answer: 'my mother name is sabina'
//                     },
//                     {
//                         id: 4,
//                         name: 'whats Your class name?',
//                         answer: 'my name is high school'
//                     },
//                     {
//                         id: 5,
//                         name: 'your fevarit master name',
//                         answer: 'my fevarit teacher name hanif'
//                     },
//                     {
//                         id: 6,
//                         name: 'Whats Your GirlFrined name',
//                         answer: 'my mother name is runjila'
//                     }
//                 ],
//                 explanQuestion: {
//                     correct : [
//                         {
//                             id:1,
//                             name: 'whats Your name?',
//                             ans: 'worng'
//                         },
//                         {
//                             id:2,
//                             name: 'your fevarit teacher name?',
//                             ans: 'correct'
//                         },
//                         {
//                             id:3,
//                             name: 'Whats Your mother name?',
//                             ans: 'worng'
//                         }
//                     ],
//                     worng: [
//                         {
//                             id:1,
//                             name: 'whats Your class name?',
//                             answer: 'worng'
//                         },
//                         {
//                             id:2,
//                             name: 'your fevarit master name',
//                             answer: 'correct'
//                         },
//                         {
//                             id:3,
//                             name: 'Whats Your GirlFrined name',
//                             answer: 'correct'
//                         }
//                     ]
//                 }
//             }
//         ]
//     },
//     {
//         id: 2,
//         name: 'Arifa Begum',
//         image: 'https://cdn.pixabay.com/photo/2015/01/08/18/30/entrepreneur-593371_1280.jpg',
//         result: '2 hours age',
//         updateResult: '1 hours age',
//         totalMarks: 4500,
//         markAvarage: 68,
//         markDescription: 'Total mark avarage:',
//         subject: [
//             {
//                 id: 1,
//                 name: 'English',
//                 markAndAnswer: {
//                     totalMarks: 100,
//                     worng: 45
//                 },
//                 question: [
//                     {
//                         id: 1,
//                         name: 'whats Your name?',
//                         answer: 'my name is shafikul'
//                     },
//                     {
//                         id: 2,
//                         name: 'your fevarit teacher name',
//                         answer: 'my fevarit teacher name runjila'
//                     },
//                     {
//                         id: 3,
//                         name: 'Whats Your mother name',
//                         answer: 'my mother name is sabina'
//                     },
//                     {
//                         id: 4,
//                         name: 'whats Your class name?',
//                         answer: 'my name is high school'
//                     },
//                     {
//                         id: 5,
//                         name: 'your fevarit master name',
//                         answer: 'my fevarit teacher name hanif'
//                     },
//                     {
//                         id: 6,
//                         name: 'Whats Your GirlFrined name',
//                         answer: 'my mother name is runjila'
//                     }
//                 ],
//                 explanQuestion: {
//                     correct : [
//                         {
//                             id:1,
//                             name: 'whats Your name?',
//                             ans: 'worng'
//                         },
//                         {
//                             id:2,
//                             name: 'your fevarit teacher name?',
//                             ans: 'correct'
//                         },
//                         {
//                             id:3,
//                             name: 'Whats Your mother name?',
//                             ans: 'worng'
//                         }
//                     ],
//                     worng: [
//                         {
//                             id:1,
//                             name: 'whats Your class name?',
//                             answer: 'worng'
//                         },
//                         {
//                             id:2,
//                             name: 'your fevarit master name',
//                             answer: 'correct'
//                         },
//                         {
//                             id:3,
//                             name: 'Whats Your GirlFrined name',
//                             answer: 'correct'
//                         }
//                     ]
//                 }
//             },
//             {
//                 id: 2,
//                 name: 'Bangla',
//                 markAndAnswer: {
//                     totalMarks: 100,
//                     worng: 80
//                 },
//                 question: [
//                     {
//                         id: 1,
//                         name: 'whats Your name?',
//                         answer: 'my name is shafikul'
//                     },
//                     {
//                         id: 2,
//                         name: 'your fevarit teacher name',
//                         answer: 'my fevarit teacher name runjila'
//                     },
//                     {
//                         id: 3,
//                         name: 'Whats Your mother name',
//                         answer: 'my mother name is sabina'
//                     },
//                     {
//                         id: 4,
//                         name: 'whats Your class name?',
//                         answer: 'my name is high school'
//                     },
//                     {
//                         id: 5,
//                         name: 'your fevarit master name',
//                         answer: 'my fevarit teacher name hanif'
//                     },
//                     {
//                         id: 6,
//                         name: 'Whats Your GirlFrined name',
//                         answer: 'my mother name is runjila'
//                     }
//                 ],
//                 explanQuestion: {
//                     correct : [
//                         {
//                             id:1,
//                             name: 'whats Your name?',
//                             ans: 'worng'
//                         },
//                         {
//                             id:2,
//                             name: 'your fevarit teacher name?',
//                             ans: 'correct'
//                         },
//                         {
//                             id:3,
//                             name: 'Whats Your mother name?',
//                             ans: 'worng'
//                         }
//                     ],
//                     worng: [
//                         {
//                             id:1,
//                             name: 'whats Your class name?',
//                             answer: 'worng'
//                         },
//                         {
//                             id:2,
//                             name: 'your fevarit master name',
//                             answer: 'correct'
//                         },
//                         {
//                             id:3,
//                             name: 'Whats Your GirlFrined name',
//                             answer: 'correct'
//                         }
//                     ]
//                 }
//             },
//             {
//                 id: 3,
//                 name: 'Somaj Biggan',
//                 markAndAnswer: {
//                     totalMarks: 100,
//                     worng: 10
//                 },
//                 question: [
//                     {
//                         id: 1,
//                         name: 'whats Your name?',
//                         answer: 'my name is shafikul'
//                     },
//                     {
//                         id: 2,
//                         name: 'your fevarit teacher name',
//                         answer: 'my fevarit teacher name runjila'
//                     },
//                     {
//                         id: 3,
//                         name: 'Whats Your mother name',
//                         answer: 'my mother name is sabina'
//                     },
//                     {
//                         id: 4,
//                         name: 'whats Your class name?',
//                         answer: 'my name is high school'
//                     },
//                     {
//                         id: 5,
//                         name: 'your fevarit master name',
//                         answer: 'my fevarit teacher name hanif'
//                     },
//                     {
//                         id: 6,
//                         name: 'Whats Your GirlFrined name',
//                         answer: 'my mother name is runjila'
//                     }
//                 ],
//                 explanQuestion: {
//                     correct : [
//                         {
//                             id:1,
//                             name: 'whats Your name?',
//                             ans: 'worng'
//                         },
//                         {
//                             id:2,
//                             name: 'your fevarit teacher name?',
//                             ans: 'correct'
//                         },
//                         {
//                             id:3,
//                             name: 'Whats Your mother name?',
//                             ans: 'worng'
//                         }
//                     ],
//                     worng: [
//                         {
//                             id:1,
//                             name: 'whats Your class name?',
//                             answer: 'worng'
//                         },
//                         {
//                             id:2,
//                             name: 'your fevarit master name',
//                             answer: 'correct'
//                         },
//                         {
//                             id:3,
//                             name: 'Whats Your GirlFrined name',
//                             answer: 'correct'
//                         }
//                     ]
//                 }
//             }
//         ]
//     },
//     {
//         id: 2,
//         name: 'Runjila Begum',
//         image: 'https://cdn.pixabay.com/photo/2015/01/08/18/30/entrepreneur-593371_1280.jpg',
//         result: '2 hours age',
//         updateResult: '1 hours age',
//         totalMarks: 4500,
//         markAvarage: 20,
//         markDescription: 'Total mark avarage:',
//         subject: [
//             {
//                 id: 1,
//                 name: 'English',
//                 markAndAnswer: {
//                     totalMarks: 100,
//                     worng: 32
//                 },
//                 question: [
//                     {
//                         id: 1,
//                         name: 'whats Your name?',
//                         answer: 'my name is shafikul'
//                     },
//                     {
//                         id: 2,
//                         name: 'your fevarit teacher name',
//                         answer: 'my fevarit teacher name runjila'
//                     },
//                     {
//                         id: 3,
//                         name: 'Whats Your mother name',
//                         answer: 'my mother name is sabina'
//                     },
//                     {
//                         id: 4,
//                         name: 'whats Your class name?',
//                         answer: 'my name is high school'
//                     },
//                     {
//                         id: 5,
//                         name: 'your fevarit master name',
//                         answer: 'my fevarit teacher name hanif'
//                     },
//                     {
//                         id: 6,
//                         name: 'Whats Your GirlFrined name',
//                         answer: 'my mother name is runjila'
//                     }
//                 ],
//                 explanQuestion: {
//                     correct : [
//                         {
//                             id:1,
//                             name: 'whats Your name?',
//                             ans: 'worng'
//                         },
//                         {
//                             id:2,
//                             name: 'your fevarit teacher name?',
//                             ans: 'correct'
//                         },
//                         {
//                             id:3,
//                             name: 'Whats Your mother name?',
//                             ans: 'worng'
//                         }
//                     ],
//                     worng: [
//                         {
//                             id:1,
//                             name: 'whats Your class name?',
//                             answer: 'worng'
//                         },
//                         {
//                             id:2,
//                             name: 'your fevarit master name',
//                             answer: 'correct'
//                         },
//                         {
//                             id:3,
//                             name: 'Whats Your GirlFrined name',
//                             answer: 'correct'
//                         }
//                     ]
//                 }
//             },
//             {
//                 id: 2,
//                 name: 'Bangla',
//                 markAndAnswer: {
//                     totalMarks: 100,
//                     worng: 48
//                 },
//                 question: [
//                     {
//                         id: 1,
//                         name: 'whats Your name?',
//                         answer: 'my name is shafikul'
//                     },
//                     {
//                         id: 2,
//                         name: 'your fevarit teacher name',
//                         answer: 'my fevarit teacher name runjila'
//                     },
//                     {
//                         id: 3,
//                         name: 'Whats Your mother name',
//                         answer: 'my mother name is sabina'
//                     },
//                     {
//                         id: 4,
//                         name: 'whats Your class name?',
//                         answer: 'my name is high school'
//                     },
//                     {
//                         id: 5,
//                         name: 'your fevarit master name',
//                         answer: 'my fevarit teacher name hanif'
//                     },
//                     {
//                         id: 6,
//                         name: 'Whats Your GirlFrined name',
//                         answer: 'my mother name is runjila'
//                     }
//                 ],
//                 explanQuestion: {
//                     correct : [
//                         {
//                             id:1,
//                             name: 'whats Your name?',
//                             ans: 'worng'
//                         },
//                         {
//                             id:2,
//                             name: 'your fevarit teacher name?',
//                             ans: 'correct'
//                         },
//                         {
//                             id:3,
//                             name: 'Whats Your mother name?',
//                             ans: 'worng'
//                         }
//                     ],
//                     worng: [
//                         {
//                             id:1,
//                             name: 'whats Your class name?',
//                             answer: 'worng'
//                         },
//                         {
//                             id:2,
//                             name: 'your fevarit master name',
//                             answer: 'correct'
//                         },
//                         {
//                             id:3,
//                             name: 'Whats Your GirlFrined name',
//                             answer: 'correct'
//                         }
//                     ]
//                 }
//             },
//             {
//                 id: 3,
//                 name: 'Somaj Biggan',
//                 markAndAnswer: {
//                     totalMarks: 100,
//                     worng: 25
//                 },
//                 question: [
//                     {
//                         id: 1,
//                         name: 'whats Your name?',
//                         answer: 'my name is shafikul'
//                     },
//                     {
//                         id: 2,
//                         name: 'your fevarit teacher name',
//                         answer: 'my fevarit teacher name runjila'
//                     },
//                     {
//                         id: 3,
//                         name: 'Whats Your mother name',
//                         answer: 'my mother name is sabina'
//                     },
//                     {
//                         id: 4,
//                         name: 'whats Your class name?',
//                         answer: 'my name is high school'
//                     },
//                     {
//                         id: 5,
//                         name: 'your fevarit master name',
//                         answer: 'my fevarit teacher name hanif'
//                     },
//                     {
//                         id: 6,
//                         name: 'Whats Your GirlFrined name',
//                         answer: 'my mother name is runjila'
//                     }
//                 ],
//                 explanQuestion: {
//                     correct : [
//                         {
//                             id:1,
//                             name: 'whats Your name?',
//                             ans: 'worng'
//                         },
//                         {
//                             id:2,
//                             name: 'your fevarit teacher name?',
//                             ans: 'correct'
//                         },
//                         {
//                             id:3,
//                             name: 'Whats Your mother name?',
//                             ans: 'worng'
//                         }
//                     ],
//                     worng: [
//                         {
//                             id:1,
//                             name: 'whats Your class name?',
//                             answer: 'worng'
//                         },
//                         {
//                             id:2,
//                             name: 'your fevarit master name',
//                             answer: 'correct'
//                         },
//                         {
//                             id:3,
//                             name: 'Whats Your GirlFrined name',
//                             answer: 'correct'
//                         }
//                     ]
//                 }
//             }
//         ]
//     }
// ])
const passMark = {
    fast: 30,
    second: 50,
    thred: 80,
    four: 100
}

</script>

<template>
<!-- All pages will have it -->
<Slider/>
<Navbar/>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <RightSideView/>
      </div>
<!-- Current Page Content -->
      <div class="col-md-6">
<!-- Right Side Content -->
        <div class="">
          <h1 class="text-center">ClassResults Page</h1>
<!-- Design Component -->
          <div class="d-flex justify-content-center">
            <i class="designLine fa-solid fa-ellipsis"></i>
            <i class="designLine fa-brands fa-centos"></i>
            <i class="designLine fa-solid fa-ellipsis"></i>
         </div>
         <ul class="list-unstyled d-flex text-capitalize gap-2">
          <li>Home /</li>
          <li>ClassResults /</li>
         </ul>
        </div>

<!-- All Work Start -->
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12" v-for="detalis in studentResultSheet" :key="detalis.id">
              <div class="container">
                <div class="row">
                    <div class="col-xl-12" >
                        <div class="card mb-3 card-body">
                            <div class="row align-items-center">
                                <div class="col-auto">
                                    <a href="#!.html">
                                    <img :src="detalis.image" class="width-90 rounded-3" alt="">
                                    </a>
                                </div>
                                <div class="col">
                                    <div class="overflow-hidden flex-nowrap">
                                        <h6 class="mb-1">
                                            <a href="#!" class="text-reset">{{ detalis.name }}</a>
                                        </h6>
                                        <span class="d-block small">
                                            <span class="my-2">{{ detalis.updateResult }} </span>
                                            <ul class="d-flex flex-wrap list-unstyled gap-2 p-0 my-2 mx-0">
                                                <li class="listStyle" 
                                                    v-for="allSubject in detalis.subject" :key="allSubject.id"
                                                    :class="
                                                    (allSubject.markAndanswer.totalMarks - allSubject.markAndanswer.worng) <= passMark.fast ? 'bgRed' : 
                                                    (allSubject.markAndanswer.totalMarks - allSubject.markAndanswer.worng) <= passMark.second ? 'bgYellow' : 
                                                    (allSubject.markAndanswer.totalMarks - allSubject.markAndanswer.worng) <= passMark.thred ? 'bgBlue' : 
                                                    (allSubject.markAndanswer.totalMarks - allSubject.markAndanswer.worng) <= passMark.four ? 'bgGreen' : 
                                                    'bgWhite'"
                                                    >
                                                    <!-- {{ allSubject.markAndanswer.totalMarks }} - {{ allSubject.markAndanswer.worng }} <br>
                                                    {{ allSubject.markAndanswer.totalMarks - allSubject.markAndanswer.worng }} -->
                                                    {{ allSubject.name }}
                                                </li>
                                            </ul>
                                            <p  class="my-2">{{ detalis.markDescription }} <b><small class="me-2">{{ detalis.markAvarage }}%</small></b></p>
                                        </span>

                                        <div class="row align-items-center">
                                            <div class="col-12">
                                                <div class="row align-items-center g-0"> 
                                                    <div class="col">
                                                        <!-- Progress bar -->
                                                        <div class="progress placeholder-glow" style="height: 7px;">
                                                            <div 
                                                                :style="{width: detalis.markAvarage+'%'}" 
                                                                :class="
                                                                detalis.markAvarage <= passMark.fast ? 'bgRed' : 
                                                                detalis.markAvarage <= passMark.second ? 'bgYellow' : 
                                                                detalis.markAvarage <= passMark.thred ? 'bgBlue' : 
                                                                detalis.markAvarage <= passMark.four ? 'bgGreen' : 
                                                                'bgWhite'" 
                                                                class="progress-bar" role="progressbar" 
                                                                aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

<!-- Left Side Content -->
      <div class="col-md-3">
        <LeftSideView/>
      </div>
    </div>
  </div> 
<!-- Footer Content -->
  <Footer/>
</template>

<style scoped>
.designLine{
  font-size: 3rem;
}


body{margin-top:20px;
background:#eee;
}

.card {
    box-shadow: 0 20px 27px 0 rgb(0 0 0 / 5%);
}
.width-90 {
    width: 90px!important;
}
.rounded-3 {
    border-radius: 0.5rem !important;
}
.listStyle{
    background: cornsilk;
    padding: 0px 7px;
    border-radius: 6px;
    box-shadow: 0px 1px 3px 0px #5e5e5ee0;
    color: black;
    text-transform: capitalize;
}

.bgRed{
  background: rgba(255, 0, 0, 0.671);
}
.bgYellow{
  background: yellow;
}
.bgBlue{
  background: rgba(0, 0, 255, 0.594);
}
.bgGreen{
  background: green;
}
.bgWhite{
  background: #fafafa;
}
</style>