/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Layout } from './components/Layout';
import { TestView } from './components/TestView';
import { HistoryView } from './components/HistoryView';

export default function App() {
  const [activeTab, setActiveTab] = useState<'test' | 'history'>('test');

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {activeTab === 'test' ? <TestView /> : <HistoryView />}
    </Layout>
  );
}
