<script setup lang="ts">
import Overview from "./components/Overview.vue";
import DateRangePicker from "./components/DateRangePicker.vue";
import RecentRelease from "./components/RecentRelease.vue";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
</script>

<template>
  <div
    class="flex md:items-center md:justify-between space-y-2 flex-col md:flex-row"
  >
    <h2 class="text-3xl font-bold tracking-tight">Dashboard</h2>
    <div class="flex items-center space-x-2">
      <DateRangePicker />
      <Button>Filtrar</Button>
    </div>
  </div>
  <Tabs default-value="overview" class="space-y-4">
    <TabsList>
      <TabsTrigger value="overview">Resumo</TabsTrigger>
      <TabsTrigger value="releases">Lançamentos</TabsTrigger>
      <TabsTrigger value="reports">Relatórios</TabsTrigger>
    </TabsList>
    <TabsContent value="overview" class="space-y-4">
      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader
            class="flex flex-row items-center justify-between space-y-0 pb-2"
          >
            <CardTitle class="text-sm font-medium">
              Saldo mês passado
            </CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              class="h-4 w-4 text-muted-foreground"
            >
              <path
                d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
              />
            </svg>
          </CardHeader>
          <CardContent>
            <div class="text-2xl font-bold">R$ 10.000,00</div>
            <p class="text-xs text-muted-foreground">
              +1% em relação ao mês passado
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader
            class="flex flex-row items-center justify-between space-y-0 pb-2"
          >
            <CardTitle class="text-sm font-medium"> Entradas </CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              class="h-4 w-4 text-muted-foreground"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </CardHeader>
          <CardContent>
            <div class="text-2xl font-bold">R$ 4.000,00</div>
            <p class="text-xs text-muted-foreground">
              +180.1% em relação ao mês passado
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader
            class="flex flex-row items-center justify-between space-y-0 pb-2"
          >
            <CardTitle class="text-sm font-medium"> Saldo Atual </CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              class="h-4 w-4 text-muted-foreground"
            >
              <path
                d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
              />
            </svg>
          </CardHeader>
          <CardContent>
            <div class="text-2xl font-bold">R$ 13.000,00</div>
            <p class="text-xs text-muted-foreground">
              +19% em relação ao mês passado
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader
            class="flex flex-row items-center justify-between space-y-0 pb-2"
          >
            <CardTitle class="text-sm font-medium"> Saídas </CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              class="h-4 w-4 text-muted-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent>
            <div class="text-2xl font-bold">R$ 1.000,00</div>
            <p class="text-xs text-muted-foreground">
              +19% em relação ao mês passado
            </p>
          </CardContent>
        </Card>
      </div>
      <div class="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Entradas x Saídas</CardTitle>
          </CardHeader>
          <CardContent class="pl-2">
            <Overview />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Próximos lançamentos</CardTitle>
            <CardDescription>
              Você tem 3 lançamentos programados para os próximos dias.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RecentRelease />
          </CardContent>
        </Card>
      </div>
    </TabsContent>
    <TabsContent value="releases" class="space-y-4">
      <div class="grid gap-4">
        <Card class="col-span-3">
          <CardHeader>
            <CardTitle>Lançamentos</CardTitle>
            <CardDescription>
              Você tem 3 lançamentos programados esse mês.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RecentSales />
          </CardContent>
        </Card>
      </div>
    </TabsContent>
  </Tabs>
</template>
