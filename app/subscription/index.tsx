import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  StatusBar, 
  Platform, 
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { useRouter } from 'expo-router';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

type PlanOption = 'yearly' | 'monthly' | 'weekly';

interface PlanDetails {
  id: PlanOption;
  title: string;
  price: number;
  period: string;
  discount?: string;
  benefits: string[];
}

const planOptions: PlanDetails[] = [
  {
    id: 'yearly',
    title: 'Yearly',
    price: 4000,
    period: 'every year',
    discount: '60% discount',
    benefits: [
      'Unlimited access to all features',
      'Premium support with priority response',
      'Advanced analytics and reporting',
      'Unlimited storage for media uploads',
      'Custom event branding options'
    ]
  },
  {
    id: 'monthly',
    title: 'Monthly',
    price: 900,
    period: 'every month',
    discount: '5% discount',
    benefits: [
      'Access to all standard features',
      'Standard support response',
      'Basic analytics and reporting',
      '5GB storage for media uploads',
      'Standard event templates'
    ]
  },
  {
    id: 'weekly',
    title: 'Weekly',
    price: 500,
    period: 'every week',
    benefits: [
      'Access to essential features',
      'Community support',
      'Event management tools',
      '1GB storage for media uploads',
      'Basic event templates'
    ]
  },
];

export default function SubscriptionScreen() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<PlanOption>('yearly');

  const handlePlanSelection = (planId: PlanOption) => {
    setSelectedPlan(planId);
  };

  const handleSubscribe = () => {
    // Handle subscription logic here
    router.replace('/auth');
  };

  const handleSkip = () => {
    // Skip subscription for now
    router.replace('/auth');
  };

  // Get the selected plan details
  const currentPlan = planOptions.find(plan => plan.id === selectedPlan) || planOptions[0];

  return (
    <View style={styles.rootContainer}>
      <StatusBar 
        translucent 
        backgroundColor="transparent" 
        barStyle="dark-content" 
      />
      <Stack.Screen 
        options={{
          title: 'Subscription',
          headerShown: false,
        }} 
      />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView 
          style={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <Text style={styles.title}>Choose your subscription plan</Text>
            <Text style={styles.subtitle}>And get a 7-day free trial</Text>
          </View>

          {/* Plan Options */}
          <View style={styles.plansContainer}>
            {planOptions.map((plan) => (
              <TouchableOpacity
                key={plan.id}
                style={[
                  styles.planOption,
                  selectedPlan === plan.id && styles.planOptionSelected,
                ]}
                onPress={() => handlePlanSelection(plan.id)}
                activeOpacity={0.8}
              >
                <View style={styles.planOptionLeft}>
                  <View style={styles.radioContainer}>
                    <View style={[
                      styles.radioOuter,
                      selectedPlan === plan.id && styles.radioOuterSelected
                    ]}>
                      {selectedPlan === plan.id && (
                        <View style={styles.radioInner} />
                      )}
                    </View>
                  </View>
                  <View style={styles.planTextContainer}>
                    <Text style={styles.planTitle}>{plan.title}</Text>
                    {plan.discount && (
                      <Text style={styles.planDiscount}>{plan.discount}</Text>
                    )}
                  </View>
                </View>
                <View style={styles.planPriceContainer}>
                  <Text style={styles.planPrice}>₹ {plan.price}</Text>
                  <Text style={styles.planPeriod}>{plan.period}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          
          {/* Benefits */}
          <View style={styles.benefitsContainer}>
            <Text style={styles.benefitsTitle}>With {currentPlan.title} plan, you'll get:</Text>
            {currentPlan.benefits.map((benefit, index) => (
              <View key={index} style={styles.benefitItem}>
                <Ionicons 
                  name="checkmark-circle" 
                  size={20} 
                  color={Colors.primary} 
                  style={styles.benefitIcon}
                />
                <Text style={styles.benefitText}>{benefit}</Text>
              </View>
            ))}
          </View>
          
          {/* Subscription Button */}
          <TouchableOpacity 
            style={styles.subscribeButton}
            onPress={handleSubscribe}
          >
            <Text style={styles.subscribeButtonText}>Subscribe to {currentPlan.title} Plan</Text>
          </TouchableOpacity>
          
          {/* Skip for now link */}
          <TouchableOpacity 
            style={styles.skipButton}
            onPress={handleSkip}
          >
            <Text style={styles.skipButtonText}>Skip for now</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginTop: 20,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.text.dark,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.text.light,
  },
  plansContainer: {
    marginBottom: 30,
  },
  planOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  planOptionSelected: {
    borderColor: Colors.primary,
    backgroundColor: Colors.background,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  planOptionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioContainer: {
    marginRight: 12,
  },
  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: Colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioOuterSelected: {
    borderColor: Colors.primary,
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: Colors.primary,
  },
  planTextContainer: {
    
  },
  planTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text.dark,
    marginBottom: 2,
  },
  planDiscount: {
    fontSize: 14,
    color: Colors.primary,
  },
  planPriceContainer: {
    alignItems: 'flex-end',
  },
  planPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text.dark,
    marginBottom: 2,
  },
  planPeriod: {
    fontSize: 12,
    color: Colors.text.light,
  },
  benefitsContainer: {
    marginBottom: 30,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  benefitsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text.dark,
    marginBottom: 16,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  benefitIcon: {
    marginRight: 8,
  },
  benefitText: {
    fontSize: 16,
    color: Colors.text.dark,
    flex: 1,
  },
  subscribeButton: {
    backgroundColor: Colors.button.primary,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  subscribeButtonText: {
    color: Colors.text.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  skipButton: {
    alignItems: 'center',
    marginBottom: 30,
  },
  skipButtonText: {
    color: Colors.text.light,
    fontSize: 16,
  },
}); 