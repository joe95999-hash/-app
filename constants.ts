import { DayPlan } from './types';

export const WORKOUT_PLAN: DayPlan[] = [
  {
    id: 'day1',
    title: '第一天：臀部強化',
    tag: '健身房',
    exercises: [
      {
        id: 'd1-a1',
        title: 'A1. 槓鈴臀推 (Hip Thrust)',
        videoId: '-nm7SrizuN8',
        sets: '4 組',
        reps: '8-12 次',
        tempo: '節奏 3-1-2-1',
        cue: '翹臀主訓練。頂峰用力夾臀停留 1 秒，慢 3 秒下放。'
      },
      {
        id: 'd1-a2',
        title: 'A2. 滑輪下拉 (Lat Pulldown)',
        videoId: 'Z1cQfWDlacw',
        sets: '4 組',
        reps: '8-12 次',
        tempo: '節奏 3-0-1-0',
        cue: '慢 3 秒回放，感受背肌拉伸，手肘向下帶。'
      },
      {
        id: 'd1-b1',
        title: 'B1. 羅馬尼亞硬舉 (RDL)',
        videoId: 'ULAiQO2KC38',
        sets: '3 組',
        reps: '10-15 次',
        tempo: '節奏 3-1-2-1',
        cue: '屁股向後推，膝蓋微彎，針對臀部上提。'
      },
      {
        id: 'd1-b2',
        title: 'B2. 坐姿划船 (Seated Row)',
        videoId: 'BrcRd1_RGV8',
        sets: '3 組',
        reps: '10-15 次',
        tempo: '節奏 3-0-1-0',
        cue: '強化上背挺拔，改善圓肩。'
      },
      {
        id: 'd1-c1',
        title: 'C1. 史密斯碰椅子深蹲',
        videoId: 'ZKouK_LCpeg',
        sets: '3 組',
        reps: '10-12 次',
        tempo: '節奏 3-0-1-0',
        cue: '用椅子限制深度，慢 3 秒坐向椅子。'
      },
      {
        id: 'd1-c2',
        title: 'C2. 側平舉 (Lateral Raise)',
        videoId: 'v0Y8_j6jpac',
        sets: '3 組',
        reps: '12-15 次',
        tempo: '節奏 3-0-1-0',
        cue: '雕塑肩膀線條，慢 3 秒放下。'
      },
      {
        id: 'd1-cardio',
        title: '🏃‍♀️ 跑步機有氧 (重訓後)',
        videoId: 'dRQOkyECJKs',
        sets: '時間',
        reps: '20-30 分鐘',
        cue: '爬坡快走或慢跑',
        isCardio: true
      }
    ]
  },
  {
    id: 'day2',
    title: '第二天：上肢推與背挺',
    tag: '健身房',
    exercises: [
      {
        id: 'd2-a1',
        title: 'A1. 坐姿肩推 (Seated OHP)',
        videoId: 'DN5GbsWIiJA',
        sets: '4 組',
        reps: '8-12 次',
        tempo: '節奏 3-0-1-0',
        cue: '核心收緊，穩定推舉。'
      },
      {
        id: 'd2-a2',
        title: 'A2. 反手握滑輪下拉',
        videoId: 'NAuRVixzxjE',
        sets: '4 組',
        reps: '8-12 次',
        tempo: '節奏 3-0-1-0',
        cue: '強化背部線條，反手握法。'
      },
      {
        id: 'd2-b1',
        title: 'B1. 上斜啞鈴臥推',
        videoId: '3WHl2u2Hdeg',
        sets: '3 組',
        reps: '10-15 次',
        tempo: '節奏 3-0-1-0',
        cue: '針對上胸塑形，慢 3 秒下放。'
      },
      {
        id: 'd2-b2',
        title: 'B2. 機械式反向飛鳥',
        videoId: 'cn-kmZrMRec',
        sets: '3 組',
        reps: '12-15 次',
        tempo: '節奏 3-0-1-0',
        cue: '背挺關鍵動作，訓練肩膀後束。'
      },
      {
        id: 'd2-c1',
        title: 'C1. 三頭肌下壓',
        videoId: 'RGQAX032NWg',
        sets: '3 組',
        reps: '12-15 次',
        tempo: '節奏 3-0-1-0',
        cue: '消除掰掰袖，上臂不動。'
      },
      {
        id: 'd2-c2',
        title: 'C2. 啞鈴彎舉',
        videoId: '1GfYuHvGBmc',
        sets: '3 組',
        reps: '12-15 次',
        tempo: '節奏 3-0-1-0',
        cue: '保持身體穩定，專注二頭肌收縮。'
      },
      {
        id: 'd2-cardio',
        title: '🏃‍♀️ 樓梯機有氧 (重訓後)',
        videoId: 'MjnTPu2peh0',
        sets: '時間',
        reps: '20-30 分鐘',
        cue: '保持穩定節奏，不要過度依賴扶手。',
        isCardio: true
      }
    ]
  },
  {
    id: 'day3',
    title: '第三天：臀與核心',
    tag: '在家',
    exercises: [
      {
        id: 'd3-a1',
        title: 'A1. 彈力帶臀推',
        videoId: 'l-ZcZzCLX5M',
        sets: '4 組',
        reps: '15-20 次',
        tempo: '節奏 3-1-2-1',
        cue: '頂峰夾臀 1 秒，慢 3 秒下放。'
      },
      {
        id: 'd3-a2',
        title: 'A2. 徒手單腿 RDL',
        videoId: 'fdM5tfFtndM',
        sets: '4 組',
        reps: '每腳 12-15 次',
        tempo: '節奏 3-1-2-1',
        cue: '慢 3 秒下放，保持骨盆水平。'
      },
      {
        id: 'd3-b1',
        title: 'B1. 側臥抬腿',
        videoId: 'TdfRsUbODlM',
        sets: '3 組',
        reps: '每邊 15-20 次',
        tempo: '節奏 3-1-2-1',
        cue: '強化臀中肌，修飾臀型外側。'
      },
      {
        id: 'd3-b2',
        title: 'B2. 棒式 (Plank)',
        videoId: 'MEXQO6R520k',
        sets: '3 組',
        reps: '45-60 秒',
        tempo: '等長收縮',
        cue: '保持核心收緊，身體呈一直線。'
      },
      {
        id: 'd3-c1',
        title: 'C1. 橋式夾球/枕頭',
        videoId: 'YU9QNkRvWJY',
        sets: '3 組',
        reps: '20-25 次',
        tempo: '節奏 3-1-2-1',
        cue: '頂峰用力夾球 1 秒。'
      },
      {
        id: 'd3-c2',
        title: 'C2. 鳥狗式 (Bird Dog)',
        videoId: 'FH81s7V0sYc',
        sets: '3 組',
        reps: '每邊 10-12 次',
        tempo: '等長控制',
        cue: '手腳伸直時停留 1-2 秒。'
      },
      {
        id: 'd3-cardio',
        title: '🏃‍♀️ 超慢跑有氧 (重訓後)',
        videoId: 'w8qUYJ2UJtE',
        sets: '時間',
        reps: '20-30 分鐘',
        cue: '輕盈步伐，保持呼吸節奏。',
        isCardio: true
      }
    ]
  },
  {
    id: 'day4',
    title: '第四天：背部強化',
    tag: '在家',
    exercises: [
      {
        id: 'd4-a1',
        title: 'A1. 跪姿伏地挺身',
        videoId: '55WRbA8hhvE',
        sets: '4 組',
        reps: '接近力竭',
        tempo: '節奏 3-0-1-0',
        cue: '慢 3 秒下放，胸口靠近地面。'
      },
      {
        id: 'd4-a2',
        title: 'A2. 彈力帶划船',
        videoId: 'ebMzPgeZNeg',
        sets: '4 組',
        reps: '15-20 次',
        tempo: '節奏 3-0-1-0',
        cue: '慢 3 秒回放，1 秒夾背。'
      },
      {
        id: 'd4-b2',
        title: 'B2. 超人式 (Superman)',
        videoId: 'ekmctIBUbEE',
        sets: '3 組',
        reps: '12-15 次',
        tempo: '節奏 2-1-2-1',
        cue: '抬起停留 1 秒，慢 2 秒放下。'
      },
      {
        id: 'd4-c1',
        title: 'C1. 牆壁伏地挺身',
        videoId: 'Ahusq-Ry-Ss',
        sets: '3 組',
        reps: '12-15 次',
        tempo: '節奏 3-0-1-0',
        cue: '手肘靠近身體，集中訓練三頭肌，慢 3 秒貼近。'
      },
      {
        id: 'd4-c2',
        title: 'C2. 集中彎舉',
        videoId: 'ynEE32gDFpQ',
        sets: '3 組',
        reps: '15-20 次',
        tempo: '節奏 3-0-1-0',
        cue: '慢 3 秒放下重物。'
      },
      {
        id: 'd4-cardio',
        title: '🏃‍♀️ 超慢跑有氧 (重訓後)',
        videoId: 'w8qUYJ2UJtE',
        sets: '時間',
        reps: '20-30 分鐘',
        cue: '輕盈步伐，保持呼吸節奏。',
        isCardio: true
      }
    ]
  }
];
