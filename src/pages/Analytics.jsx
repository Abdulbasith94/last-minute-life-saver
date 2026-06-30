import Layout from "../components/layout/Layout";

import WeeklyProductivity
from "../components/analytics/WeeklyProductivity";

import FocusAnalytics
from "../components/analytics/FocusAnalytics";

import ProductivityTrend
from "../components/analytics/ProductivityTrend";

import StudyHeatmap
from "../components/analytics/StudyHeatmap";

import AchievementSystem
from "../components/analytics/AchievementSystem";

import BehavioralInsights
from "../components/analytics/BehavioralInsights";

import ProductivityForecast
from "../components/analytics/ProductivityForecast";

import Leaderboard
from "../components/analytics/Leaderboard";

import ExecutiveSummary
from "../components/analytics/ExecutiveSummary";

export default function Analytics() {

  return (

    <Layout>

      <h1 className="text-4xl font-bold mb-8">

        Analytics Dashboard

      </h1>

      <WeeklyProductivity />

      <FocusAnalytics />

      <ProductivityTrend />

      <StudyHeatmap />

      <AchievementSystem />

      <BehavioralInsights />

      <ProductivityForecast />

      <Leaderboard />

      <ExecutiveSummary />

    </Layout>

  );

}