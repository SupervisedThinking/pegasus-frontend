// Pegasus Frontend
// Copyright (C) 2017  Mátyás Mustoha
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program. If not, see <http://www.gnu.org/licenses/>.


#include <QtTest/QtTest>

#include "Api.h"


class test_Api : public QObject
{
    Q_OBJECT

private slots:
    void initialState();
};

void test_Api::initialState()
{
    QTest::ignoreMessage(QtInfoMsg, QRegularExpression("Found translation.*"));
    QTest::ignoreMessage(QtInfoMsg, QRegularExpression("Found theme.*"));
    QTest::ignoreMessage(QtInfoMsg, QRegularExpression("Theme set to .*"));

    ApiObject api;

    QCOMPARE(api.currentPlatform(), static_cast<Model::Platform*>(nullptr));
    QCOMPARE(api.currentPlatformIndex(), -1);
    QCOMPARE(api.currentGame(), static_cast<Model::Game*>(nullptr));
}


QTEST_MAIN(test_Api)
#include "test_Api.moc"
