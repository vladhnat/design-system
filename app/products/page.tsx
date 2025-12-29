'use client';

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Plus,
  Search,
  Edit,
  Trash2,
  MoreVertical,
  ArrowUpDown,
  Package,
  AlertCircle,
  CheckCircle2,
  Loader2,
  Download,
  Eye,
  BarChart3,
  History,
  X,
  ChevronLeft,
  ChevronRight,
  Activity,
  Copy,
  Star,
  Grid3x3,
  List,
  FileText,
  Undo2,
  Zap,
  GitCompare,
  Settings,
  Bell,
} from 'lucide-react';
import Link from 'next/link';

// Product types
type ProductStatus = 'active' | 'inactive' | 'out_of_stock';
type ProductCategory = 'electronics' | 'clothing' | 'food' | 'books' | 'toys';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  status: ProductStatus;
  stock: number;
  supplier: string;
  createdAt: string;
  tags?: string[];
  notes?: string;
  favorite?: boolean;
  stockThreshold?: number;
  lastModified?: string;
}

interface ActivityLog {
  id: string;
  action: 'created' | 'updated' | 'deleted' | 'bulk_updated' | 'bulk_deleted' | 'duplicated' | 'stock_updated' | 'favorited' | 'unfavorited';
  productName: string;
  timestamp: string;
  details?: string;
}

interface HistoryState {
  products: Product[];
  timestamp: string;
}

// Mock initial data with more products
const initialProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation',
    price: 199.99,
    category: 'electronics',
    status: 'active',
    stock: 45,
    supplier: 'TechCorp Inc.',
    createdAt: '2024-01-15',
    tags: ['wireless', 'audio', 'premium'],
  },
  {
    id: '2',
    name: 'Cotton T-Shirt',
    description: 'Comfortable 100% cotton t-shirt in various colors',
    price: 29.99,
    category: 'clothing',
    status: 'active',
    stock: 120,
    supplier: 'Fashion Brands Ltd.',
    createdAt: '2024-01-20',
    tags: ['casual', 'cotton'],
  },
  {
    id: '3',
    name: 'Organic Coffee Beans',
    description: 'Premium organic coffee beans, 1kg package',
    price: 24.99,
    category: 'food',
    status: 'out_of_stock',
    stock: 0,
    supplier: 'Organic Foods Co.',
    createdAt: '2024-01-10',
    tags: ['organic', 'coffee'],
  },
  {
    id: '4',
    name: 'JavaScript Guide',
    description: 'Comprehensive guide to modern JavaScript development',
    price: 49.99,
    category: 'books',
    status: 'active',
    stock: 30,
    supplier: 'TechBooks Publishing',
    createdAt: '2024-01-25',
    tags: ['programming', 'education'],
  },
  {
    id: '5',
    name: 'Building Blocks Set',
    description: 'Educational building blocks for children ages 3+',
    price: 39.99,
    category: 'toys',
    status: 'inactive',
    stock: 15,
    supplier: 'ToyWorld Distributors',
    createdAt: '2024-01-05',
    tags: ['educational', 'children'],
  },
  {
    id: '6',
    name: 'Smart Watch',
    description: 'Feature-rich smartwatch with health tracking',
    price: 299.99,
    category: 'electronics',
    status: 'active',
    stock: 25,
    supplier: 'TechCorp Inc.',
    createdAt: '2024-01-18',
    tags: ['wearable', 'health'],
  },
  {
    id: '7',
    name: 'Denim Jacket',
    description: 'Classic denim jacket, perfect for any season',
    price: 79.99,
    category: 'clothing',
    status: 'active',
    stock: 50,
    supplier: 'Fashion Brands Ltd.',
    createdAt: '2024-01-22',
    tags: ['denim', 'casual'],
  },
  {
    id: '8',
    name: 'Dark Chocolate Bar',
    description: 'Premium 85% dark chocolate, 200g',
    price: 12.99,
    category: 'food',
    status: 'active',
    stock: 80,
    supplier: 'Organic Foods Co.',
    createdAt: '2024-01-12',
    tags: ['chocolate', 'premium'],
  },
  {
    id: '9',
    name: 'React Patterns Book',
    description: 'Advanced React patterns and best practices',
    price: 59.99,
    category: 'books',
    status: 'active',
    stock: 20,
    supplier: 'TechBooks Publishing',
    createdAt: '2024-01-28',
    tags: ['react', 'programming'],
  },
  {
    id: '10',
    name: 'RC Drone',
    description: 'Remote controlled drone with HD camera',
    price: 149.99,
    category: 'toys',
    status: 'active',
    stock: 12,
    supplier: 'ToyWorld Distributors',
    createdAt: '2024-01-14',
    tags: ['remote-control', 'camera'],
  },
];

const categoryLabels: Record<ProductCategory, string> = {
  electronics: 'Electronics',
  clothing: 'Clothing',
  food: 'Food',
  books: 'Books',
  toys: 'Toys',
};

const statusLabels: Record<ProductStatus, string> = {
  active: 'Active',
  inactive: 'Inactive',
  out_of_stock: 'Out of Stock',
};

const statusColors: Record<ProductStatus, string> = {
  active: 'bg-green-500',
  inactive: 'bg-gray-500',
  out_of_stock: 'bg-red-500',
};

const ITEMS_PER_PAGE = 5;

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [history, setHistory] = useState<HistoryState[]>([]);
  const [activityLog, setActivityLog] = useState<ActivityLog[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [tagFilter, setTagFilter] = useState<string>('all');
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'stock' | 'createdAt'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProducts, setSelectedProducts] = useState<Set<string>>(new Set());
  const [favoriteProducts, setFavoriteProducts] = useState<Set<string>>(new Set());
  const [comparisonProducts, setComparisonProducts] = useState<Set<string>>(new Set());
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [showLowStockOnly, setShowLowStockOnly] = useState(false);
  const [stockThreshold, setStockThreshold] = useState(20);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isBulkDeleteDialogOpen, setIsBulkDeleteDialogOpen] = useState(false);
  const [isDetailsDialogOpen, setIsDetailsDialogOpen] = useState(false);
  const [isDuplicateDialogOpen, setIsDuplicateDialogOpen] = useState(false);
  const [isQuickStockDialogOpen, setIsQuickStockDialogOpen] = useState(false);
  const [isNotesDialogOpen, setIsNotesDialogOpen] = useState(false);
  const [isComparisonDialogOpen, setIsComparisonDialogOpen] = useState(false);
  const [isSettingsDialogOpen, setIsSettingsDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quickStockValue, setQuickStockValue] = useState('');
  const [productNotes, setProductNotes] = useState('');
  const [alert, setAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('products');

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '' as ProductCategory | '',
    status: 'active' as ProductStatus,
    stock: '',
    supplier: '',
    tags: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    products.forEach((p) => p.tags?.forEach((tag) => tags.add(tag)));
    return Array.from(tags).sort();
  }, [products]);

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags?.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
      const matchesStatus = statusFilter === 'all' || product.status === statusFilter;
      const matchesTag = tagFilter === 'all' || product.tags?.includes(tagFilter);
      const matchesPriceMin = !priceMin || product.price >= parseFloat(priceMin);
      const matchesPriceMax = !priceMax || product.price <= parseFloat(priceMax);
      const matchesDateFrom = !dateFrom || product.createdAt >= dateFrom;
      const matchesDateTo = !dateTo || product.createdAt <= dateTo;
      const matchesLowStock = !showLowStockOnly || (product.stock < stockThreshold && product.stock > 0);
      return matchesSearch && matchesCategory && matchesStatus && matchesTag && matchesPriceMin && matchesPriceMax && matchesDateFrom && matchesDateTo && matchesLowStock;
    });

    // Sort
    filtered.sort((a, b) => {
      let aValue: string | number;
      let bValue: string | number;

      switch (sortBy) {
        case 'name':
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case 'price':
          aValue = a.price;
          bValue = b.price;
          break;
        case 'stock':
          aValue = a.stock;
          bValue = b.stock;
          break;
        case 'createdAt':
          aValue = a.createdAt;
          bValue = b.createdAt;
          break;
        default:
          return 0;
      }

      if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    return filtered;
  }, [products, searchQuery, categoryFilter, statusFilter, tagFilter, priceMin, priceMax, dateFrom, dateTo, showLowStockOnly, stockThreshold, sortBy, sortOrder]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredAndSortedProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredAndSortedProducts, currentPage]);

  // Statistics
  const statistics = useMemo(() => {
    const total = products.length;
    const active = products.filter((p) => p.status === 'active').length;
    const inactive = products.filter((p) => p.status === 'inactive').length;
    const outOfStock = products.filter((p) => p.status === 'out_of_stock').length;
    const totalValue = products.reduce((sum, p) => sum + p.price * p.stock, 0);
    const avgPrice = products.reduce((sum, p) => sum + p.price, 0) / total || 0;
    const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
    const lowStock = products.filter((p) => p.stock < 20 && p.stock > 0).length;
    const categoryCounts = products.reduce((acc, p) => {
      acc[p.category] = (acc[p.category] || 0) + 1;
      return acc;
    }, {} as Record<ProductCategory, number>);
    const supplierCounts = products.reduce((acc, p) => {
      acc[p.supplier] = (acc[p.supplier] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    const uniqueSuppliers = Object.keys(supplierCounts).length;

    return {
      total,
      active,
      inactive,
      outOfStock,
      totalValue,
      avgPrice,
      totalStock,
      lowStock,
      categoryCounts,
      supplierCounts,
      uniqueSuppliers,
    };
  }, [products]);

  const saveToHistory = () => {
    setHistory((prev) => [...prev, { products: [...products], timestamp: new Date().toISOString() }].slice(-10)); // Keep last 10 states
  };

  const undo = () => {
    if (history.length > 0) {
      const previousState = history[history.length - 1];
      setHistory((prev) => prev.slice(0, -1));
      setProducts(previousState.products);
      addActivityLog('updated', 'Multiple products', 'Undo operation');
      setAlert({ type: 'success', message: 'Changes undone successfully!' });
      setTimeout(() => setAlert(null), 3000);
    }
  };

  const addActivityLog = (action: ActivityLog['action'], productName: string, details?: string) => {
    const log: ActivityLog = {
      id: Date.now().toString(),
      action,
      productName,
      timestamp: new Date().toISOString(),
      details,
    };
    setActivityLog((prev) => [log, ...prev].slice(0, 50)); // Keep last 50 entries
  };

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) {
      errors.name = 'Product name is required';
    }

    if (!formData.description.trim()) {
      errors.description = 'Description is required';
    }

    if (!formData.price || parseFloat(formData.price) <= 0) {
      errors.price = 'Valid price is required';
    }

    if (!formData.category) {
      errors.category = 'Category is required';
    }

    if (!formData.stock || parseInt(formData.stock) < 0) {
      errors.stock = 'Valid stock quantity is required';
    }

    if (!formData.supplier.trim()) {
      errors.supplier = 'Supplier is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      price: '',
      category: '' as ProductCategory | '',
      status: 'active',
      stock: '',
      supplier: '',
      tags: '',
    });
    setFormErrors({});
  };

  const handleCreate = () => {
    if (!validateForm()) return;

    setIsLoading(true);
    saveToHistory();
    setTimeout(() => {
      const tags = formData.tags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean);
      const newProduct: Product = {
        id: Date.now().toString(),
        name: formData.name,
        description: formData.description,
        price: parseFloat(formData.price),
        category: formData.category as ProductCategory,
        status: formData.status,
        stock: parseInt(formData.stock),
        supplier: formData.supplier,
        createdAt: new Date().toISOString().split('T')[0],
        tags,
        stockThreshold: stockThreshold,
        lastModified: new Date().toISOString(),
      };

      setProducts([...products, newProduct]);
      setIsLoading(false);
      setIsCreateDialogOpen(false);
      resetForm();
      addActivityLog('created', newProduct.name);
      setAlert({ type: 'success', message: 'Product created successfully!' });
      setTimeout(() => setAlert(null), 3000);
    }, 500);
  };

  const handleEdit = () => {
    if (!validateForm() || !selectedProduct) return;

    setIsLoading(true);
    saveToHistory();
    setTimeout(() => {
      const tags = formData.tags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean);
      const updatedProduct: Product = {
        ...selectedProduct,
        name: formData.name,
        description: formData.description,
        price: parseFloat(formData.price),
        category: formData.category as ProductCategory,
        status: formData.status,
        stock: parseInt(formData.stock),
        supplier: formData.supplier,
        tags,
        lastModified: new Date().toISOString(),
      };

      setProducts(products.map((p) => (p.id === selectedProduct.id ? updatedProduct : p)));
      setIsLoading(false);
      setIsEditDialogOpen(false);
      setSelectedProduct(null);
      resetForm();
      addActivityLog('updated', updatedProduct.name, 'Product details modified');
      setAlert({ type: 'success', message: 'Product updated successfully!' });
      setTimeout(() => setAlert(null), 3000);
    }, 500);
  };

  const handleDuplicate = () => {
    if (!selectedProduct) return;

    setIsLoading(true);
    saveToHistory();
    setTimeout(() => {
      const duplicatedProduct: Product = {
        ...selectedProduct,
        id: Date.now().toString(),
        name: `${selectedProduct.name} (Copy)`,
        createdAt: new Date().toISOString().split('T')[0],
        lastModified: new Date().toISOString(),
      };

      setProducts([...products, duplicatedProduct]);
      setIsLoading(false);
      setIsDuplicateDialogOpen(false);
      setSelectedProduct(null);
      addActivityLog('duplicated', duplicatedProduct.name, `Duplicated from "${selectedProduct.name}"`);
      setAlert({ type: 'success', message: 'Product duplicated successfully!' });
      setTimeout(() => setAlert(null), 3000);
    }, 500);
  };

  const handleQuickStockUpdate = () => {
    if (!selectedProduct || !quickStockValue) return;

    setIsLoading(true);
    saveToHistory();
    setTimeout(() => {
      const newStock = parseInt(quickStockValue);
      const newStatus: ProductStatus = newStock === 0 
        ? 'out_of_stock' 
        : selectedProduct.status === 'out_of_stock' 
          ? 'active' 
          : selectedProduct.status;
      const updatedProduct: Product = {
        ...selectedProduct,
        stock: newStock,
        status: newStatus,
        lastModified: new Date().toISOString(),
      };

      setProducts(products.map((p) => (p.id === selectedProduct.id ? updatedProduct : p)));
      setIsLoading(false);
      setIsQuickStockDialogOpen(false);
      setSelectedProduct(null);
      setQuickStockValue('');
      addActivityLog('stock_updated', updatedProduct.name, `Stock updated to ${newStock}`);
      setAlert({ type: 'success', message: 'Stock updated successfully!' });
      setTimeout(() => setAlert(null), 3000);
    }, 500);
  };

  const handleSaveNotes = () => {
    if (!selectedProduct) return;

    setIsLoading(true);
    saveToHistory();
    setTimeout(() => {
      const updatedProduct: Product = {
        ...selectedProduct,
        notes: productNotes,
        lastModified: new Date().toISOString(),
      };

      setProducts(products.map((p) => (p.id === selectedProduct.id ? updatedProduct : p)));
      setIsLoading(false);
      setIsNotesDialogOpen(false);
      setSelectedProduct(null);
      setProductNotes('');
      addActivityLog('updated', updatedProduct.name, 'Notes updated');
      setAlert({ type: 'success', message: 'Notes saved successfully!' });
      setTimeout(() => setAlert(null), 3000);
    }, 500);
  };

  const toggleFavorite = (productId: string) => {
    const product = products.find((p) => p.id === productId);
    if (!product) return;

    saveToHistory();
    const newFavorites = new Set(favoriteProducts);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
      addActivityLog('unfavorited', product.name);
    } else {
      newFavorites.add(productId);
      addActivityLog('favorited', product.name);
    }
    setFavoriteProducts(newFavorites);
  };

  const handleDelete = () => {
    if (!selectedProduct) return;

    setIsLoading(true);
    saveToHistory();
    setTimeout(() => {
      const productName = selectedProduct.name;
      setProducts(products.filter((p) => p.id !== selectedProduct.id));
      setIsLoading(false);
      setIsDeleteDialogOpen(false);
      setSelectedProduct(null);
      addActivityLog('deleted', productName);
      setAlert({ type: 'success', message: 'Product deleted successfully!' });
      setTimeout(() => setAlert(null), 3000);
    }, 500);
  };

  const handleBulkDelete = () => {
    if (selectedProducts.size === 0) return;

    setIsLoading(true);
    saveToHistory();
    setTimeout(() => {
      const deletedNames = products
        .filter((p) => selectedProducts.has(p.id))
        .map((p) => p.name);
      setProducts(products.filter((p) => !selectedProducts.has(p.id)));
      setIsLoading(false);
      setIsBulkDeleteDialogOpen(false);
      addActivityLog('bulk_deleted', `${selectedProducts.size} products`, deletedNames.join(', '));
      setSelectedProducts(new Set());
      setAlert({ type: 'success', message: `${selectedProducts.size} products deleted successfully!` });
      setTimeout(() => setAlert(null), 3000);
    }, 500);
  };

  const handleBulkStatusUpdate = (status: ProductStatus) => {
    if (selectedProducts.size === 0) return;

    setIsLoading(true);
    saveToHistory();
    setTimeout(() => {
      const updatedNames = products
        .filter((p) => selectedProducts.has(p.id))
        .map((p) => p.name);
      setProducts(
        products.map((p) => (selectedProducts.has(p.id) ? { ...p, status, lastModified: new Date().toISOString() } : p))
      );
      setIsLoading(false);
      addActivityLog('bulk_updated', `${selectedProducts.size} products`, `Status changed to ${statusLabels[status]}`);
      setSelectedProducts(new Set());
      setAlert({ type: 'success', message: `${selectedProducts.size} products updated successfully!` });
      setTimeout(() => setAlert(null), 3000);
    }, 500);
  };

  const toggleProductSelection = (productId: string) => {
    const newSelection = new Set(selectedProducts);
    if (newSelection.has(productId)) {
      newSelection.delete(productId);
    } else {
      newSelection.add(productId);
    }
    setSelectedProducts(newSelection);
  };

  const toggleSelectAll = () => {
    if (selectedProducts.size === paginatedProducts.length) {
      setSelectedProducts(new Set());
    } else {
      setSelectedProducts(new Set(paginatedProducts.map((p) => p.id)));
    }
  };

  const openEditDialog = (product: Product) => {
    setSelectedProduct(product);
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price.toString(),
      category: product.category,
      status: product.status,
      stock: product.stock.toString(),
      supplier: product.supplier,
      tags: product.tags?.join(', ') || '',
    });
    setIsEditDialogOpen(true);
  };

  const openDuplicateDialog = (product: Product) => {
    setSelectedProduct(product);
    setIsDuplicateDialogOpen(true);
  };

  const openQuickStockDialog = (product: Product) => {
    setSelectedProduct(product);
    setQuickStockValue(product.stock.toString());
    setIsQuickStockDialogOpen(true);
  };

  const openNotesDialog = (product: Product) => {
    setSelectedProduct(product);
    setProductNotes(product.notes || '');
    setIsNotesDialogOpen(true);
  };

  const openDeleteDialog = (product: Product) => {
    setSelectedProduct(product);
    setIsDeleteDialogOpen(true);
  };

  const openDetailsDialog = (product: Product) => {
    setSelectedProduct(product);
    setIsDetailsDialogOpen(true);
  };

  const toggleSort = (field: typeof sortBy) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  const exportToCSV = () => {
    const headers = ['Name', 'Description', 'Price', 'Category', 'Status', 'Stock', 'Supplier', 'Created At', 'Tags'];
    const rows = filteredAndSortedProducts.map((p) => [
      p.name,
      p.description,
      p.price.toString(),
      categoryLabels[p.category],
      statusLabels[p.status],
      p.stock.toString(),
      p.supplier,
      p.createdAt,
      p.tags?.join('; ') || '',
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map((row) => row.map((cell) => `"${cell}"`).join(',')),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `products-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);

    setAlert({ type: 'success', message: 'Products exported successfully!' });
    setTimeout(() => setAlert(null), 3000);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setCategoryFilter('all');
    setStatusFilter('all');
    setTagFilter('all');
    setPriceMin('');
    setPriceMax('');
    setDateFrom('');
    setDateTo('');
    setShowLowStockOnly(false);
    setCurrentPage(1);
  };

  const toggleComparison = (productId: string) => {
    const newComparison = new Set(comparisonProducts);
    if (newComparison.has(productId)) {
      newComparison.delete(productId);
    } else {
      if (newComparison.size >= 3) {
        setAlert({ type: 'error', message: 'You can compare up to 3 products at once' });
        setTimeout(() => setAlert(null), 3000);
        return;
      }
      newComparison.add(productId);
    }
    setComparisonProducts(newComparison);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
                <Package className="h-8 w-8" />
                Product Management
              </h1>
              <p className="text-muted-foreground mt-2">
                Comprehensive product inventory management system
              </p>
            </div>
            <Link href="/">
              <Button variant="outline">Back to Home</Button>
            </Link>
          </div>
        </div>

        {/* Alert */}
        {alert && (
          <Alert
            className={`mb-6 ${
              alert.type === 'success'
                ? 'border-green-500 bg-green-50 dark:bg-green-950'
                : 'border-red-500 bg-red-50 dark:bg-red-950'
            }`}
          >
            {alert.type === 'success' ? (
              <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
            ) : (
              <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
            )}
            <AlertTitle
              className={
                alert.type === 'success'
                  ? 'text-green-800 dark:text-green-200'
                  : 'text-red-800 dark:text-red-200'
              }
            >
              {alert.type === 'success' ? 'Success' : 'Error'}
            </AlertTitle>
            <AlertDescription
              className={
                alert.type === 'success'
                  ? 'text-green-700 dark:text-green-300'
                  : 'text-red-700 dark:text-red-300'
              }
            >
              {alert.message}
            </AlertDescription>
          </Alert>
        )}

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList className="grid w-full grid-cols-3 max-w-md">
            <TabsTrigger value="products" className="gap-2">
              <Package className="h-4 w-4" />
              Products
            </TabsTrigger>
            <TabsTrigger value="statistics" className="gap-2">
              <BarChart3 className="h-4 w-4" />
              Statistics
            </TabsTrigger>
            <TabsTrigger value="activity" className="gap-2">
              <History className="h-4 w-4" />
              Activity
            </TabsTrigger>
          </TabsList>

          {/* Products Tab */}
          <TabsContent value="products" className="space-y-6">
            {/* Filters and Actions */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Filters & Search</CardTitle>
                    <CardDescription>Search and filter products</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    {history.length > 0 && (
                      <Button variant="outline" size="sm" onClick={undo} title="Undo last action (Ctrl+Z)">
                        <Undo2 className="h-4 w-4 mr-2" />
                        Undo
                      </Button>
                    )}
                    {comparisonProducts.size > 0 && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsComparisonDialogOpen(true)}
                      >
                        <GitCompare className="h-4 w-4 mr-2" />
                        Compare ({comparisonProducts.size})
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsSettingsDialogOpen(true)}
                    >
                      <Settings className="h-4 w-4" />
                    </Button>
                    {(searchQuery || categoryFilter !== 'all' || statusFilter !== 'all' || tagFilter !== 'all' || priceMin || priceMax || dateFrom || dateTo || showLowStockOnly) && (
                      <Button variant="ghost" size="sm" onClick={clearFilters}>
                        <X className="h-4 w-4 mr-2" />
                        Clear Filters
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="pl-9"
                    />
                  </div>
                  <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {Object.entries(categoryLabels).map(([value, label]) => (
                        <SelectItem key={value} value={value}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Statuses" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      {Object.entries(statusLabels).map(([value, label]) => (
                        <SelectItem key={value} value={value}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={tagFilter} onValueChange={setTagFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Tags" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Tags</SelectItem>
                      {allTags.map((tag) => (
                        <SelectItem key={tag} value={tag}>
                          {tag}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div className="grid gap-2">
                    <Label>Price Range ($)</Label>
                    <div className="flex gap-2">
                      <Input
                        type="number"
                        step="0.01"
                        placeholder="Min"
                        value={priceMin}
                        onChange={(e) => {
                          setPriceMin(e.target.value);
                          setCurrentPage(1);
                        }}
                      />
                      <Input
                        type="number"
                        step="0.01"
                        placeholder="Max"
                        value={priceMax}
                        onChange={(e) => {
                          setPriceMax(e.target.value);
                          setCurrentPage(1);
                        }}
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label>Date Range</Label>
                    <div className="flex gap-2">
                      <Input
                        type="date"
                        placeholder="From"
                        value={dateFrom}
                        onChange={(e) => {
                          setDateFrom(e.target.value);
                          setCurrentPage(1);
                        }}
                      />
                      <Input
                        type="date"
                        placeholder="To"
                        value={dateTo}
                        onChange={(e) => {
                          setDateTo(e.target.value);
                          setCurrentPage(1);
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="low-stock"
                        checked={showLowStockOnly}
                        onCheckedChange={setShowLowStockOnly}
                      />
                      <Label htmlFor="low-stock" className="cursor-pointer">
                        Low Stock Only
                      </Label>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                    >
                      <List className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                    >
                      <Grid3x3 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
                  <DialogTrigger asChild>
                    <Button onClick={resetForm} className="w-full">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Product
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Create New Product</DialogTitle>
                        <DialogDescription>
                          Fill in the details to create a new product
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                          <Label htmlFor="create-name">
                            Product Name <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="create-name"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            placeholder="Enter product name"
                          />
                          {formErrors.name && (
                            <p className="text-sm text-destructive">{formErrors.name}</p>
                          )}
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="create-description">
                            Description <span className="text-destructive">*</span>
                          </Label>
                          <Textarea
                            id="create-description"
                            value={formData.description}
                            onChange={(e) =>
                              setFormData({ ...formData, description: e.target.value })
                            }
                            placeholder="Enter product description"
                            rows={4}
                          />
                          {formErrors.description && (
                            <p className="text-sm text-destructive">{formErrors.description}</p>
                          )}
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="create-price">
                              Price ($) <span className="text-destructive">*</span>
                            </Label>
                            <Input
                              id="create-price"
                              type="number"
                              step="0.01"
                              value={formData.price}
                              onChange={(e) =>
                                setFormData({ ...formData, price: e.target.value })
                              }
                              placeholder="0.00"
                            />
                            {formErrors.price && (
                              <p className="text-sm text-destructive">{formErrors.price}</p>
                            )}
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="create-stock">
                              Stock <span className="text-destructive">*</span>
                            </Label>
                            <Input
                              id="create-stock"
                              type="number"
                              value={formData.stock}
                              onChange={(e) =>
                                setFormData({ ...formData, stock: e.target.value })
                              }
                              placeholder="0"
                            />
                            {formErrors.stock && (
                              <p className="text-sm text-destructive">{formErrors.stock}</p>
                            )}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="create-category">
                              Category <span className="text-destructive">*</span>
                            </Label>
                            <Select
                              value={formData.category}
                              onValueChange={(value) =>
                                setFormData({ ...formData, category: value as ProductCategory })
                              }
                            >
                              <SelectTrigger id="create-category">
                                <SelectValue placeholder="Select category" />
                              </SelectTrigger>
                              <SelectContent>
                                {Object.entries(categoryLabels).map(([value, label]) => (
                                  <SelectItem key={value} value={value}>
                                    {label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            {formErrors.category && (
                              <p className="text-sm text-destructive">{formErrors.category}</p>
                            )}
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="create-status">Status</Label>
                            <Select
                              value={formData.status}
                              onValueChange={(value) =>
                                setFormData({ ...formData, status: value as ProductStatus })
                              }
                            >
                              <SelectTrigger id="create-status">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                {Object.entries(statusLabels).map(([value, label]) => (
                                  <SelectItem key={value} value={value}>
                                    {label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="create-supplier">
                            Supplier <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="create-supplier"
                            value={formData.supplier}
                            onChange={(e) =>
                              setFormData({ ...formData, supplier: e.target.value })
                            }
                            placeholder="Enter supplier name"
                          />
                          {formErrors.supplier && (
                            <p className="text-sm text-destructive">{formErrors.supplier}</p>
                          )}
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="create-tags">Tags (comma-separated)</Label>
                          <Input
                            id="create-tags"
                            value={formData.tags}
                            onChange={(e) =>
                              setFormData({ ...formData, tags: e.target.value })
                            }
                            placeholder="tag1, tag2, tag3"
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button
                          variant="outline"
                          onClick={() => {
                            setIsCreateDialogOpen(false);
                            resetForm();
                          }}
                        >
                          Cancel
                        </Button>
                        <Button onClick={handleCreate} disabled={isLoading}>
                          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                          Create Product
                        </Button>
                      </DialogFooter>
                  </DialogContent>
                </Dialog>
                <div className="flex items-end gap-2">
                  <Button variant="outline" onClick={exportToCSV} className="flex-1">
                    <Download className="h-4 w-4 mr-2" />
                    Export CSV
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Bulk Actions */}
            {selectedProducts.size > 0 && (
              <Card className="border-primary">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium">
                        {selectedProducts.size} product{selectedProducts.size !== 1 ? 's' : ''} selected
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedProducts(new Set())}
                      >
                        Clear Selection
                      </Button>
                    </div>
                    <div className="flex gap-2">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm">
                            Update Status
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem onClick={() => handleBulkStatusUpdate('active')}>
                            Set to Active
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleBulkStatusUpdate('inactive')}>
                            Set to Inactive
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleBulkStatusUpdate('out_of_stock')}>
                            Set to Out of Stock
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => setIsBulkDeleteDialogOpen(true)}
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete Selected
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Products List */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Products ({filteredAndSortedProducts.length})</CardTitle>
                    <CardDescription>
                      {products.length} total products in inventory
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleSort('name')}
                      className="gap-2"
                    >
                      <ArrowUpDown className="h-4 w-4" />
                      Name
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleSort('price')}
                      className="gap-2"
                    >
                      <ArrowUpDown className="h-4 w-4" />
                      Price
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleSort('stock')}
                      className="gap-2"
                    >
                      <ArrowUpDown className="h-4 w-4" />
                      Stock
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {filteredAndSortedProducts.length === 0 ? (
                  <div className="text-center py-12">
                    <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No products found</h3>
                    <p className="text-muted-foreground mb-4">
                      {searchQuery || categoryFilter !== 'all' || statusFilter !== 'all'
                        ? 'Try adjusting your filters'
                        : 'Get started by creating your first product'}
                    </p>
                    {(!searchQuery && categoryFilter === 'all' && statusFilter === 'all') && (
                      <Button onClick={() => setIsCreateDialogOpen(true)}>
                        <Plus className="h-4 w-4 mr-2" />
                        Create Product
                      </Button>
                    )}
                  </div>
                ) : (
                  <>
                    <div className="space-y-4 mb-6">
                      {paginatedProducts.map((product) => (
                        <Card key={product.id} className="hover:shadow-md transition-shadow">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <Checkbox
                                checked={selectedProducts.has(product.id)}
                                onCheckedChange={() => toggleProductSelection(product.id)}
                                className="mt-1"
                              />
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <h3 className="text-xl font-semibold">{product.name}</h3>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-6 w-6"
                                    onClick={() => toggleFavorite(product.id)}
                                  >
                                    {favoriteProducts.has(product.id) ? (
                                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    ) : (
                                      <Star className="h-4 w-4" />
                                    )}
                                  </Button>
                                  <Badge
                                    className={`${statusColors[product.status]} text-white`}
                                  >
                                    {statusLabels[product.status]}
                                  </Badge>
                                  <Badge variant="outline">
                                    {categoryLabels[product.category]}
                                  </Badge>
                                  {product.stock < (product.stockThreshold || stockThreshold) && product.stock > 0 && (
                                    <Badge variant="destructive" className="gap-1">
                                      <Bell className="h-3 w-3" />
                                      Low Stock
                                    </Badge>
                                  )}
                                </div>
                                <p className="text-muted-foreground mb-4">
                                  {product.description}
                                </p>
                                {product.tags && product.tags.length > 0 && (
                                  <div className="flex flex-wrap gap-2 mb-4">
                                    {product.tags.map((tag, idx) => (
                                      <Badge key={idx} variant="secondary" className="text-xs">
                                        {tag}
                                      </Badge>
                                    ))}
                                  </div>
                                )}
                                <div className="flex flex-wrap gap-4 text-sm">
                                  <div>
                                    <span className="text-muted-foreground">Price: </span>
                                    <span className="font-semibold">${product.price.toFixed(2)}</span>
                                  </div>
                                  <div>
                                    <span className="text-muted-foreground">Stock: </span>
                                    <span className="font-semibold">{product.stock} units</span>
                                  </div>
                                  <div>
                                    <span className="text-muted-foreground">Supplier: </span>
                                    <span className="font-semibold">{product.supplier}</span>
                                  </div>
                                  <div>
                                    <span className="text-muted-foreground">Created: </span>
                                    <span className="font-semibold">{product.createdAt}</span>
                                  </div>
                                  {product.notes && (
                                    <div className="flex items-center gap-1">
                                      <FileText className="h-3 w-3 text-muted-foreground" />
                                      <span className="text-muted-foreground">Has notes</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => toggleComparison(product.id)}
                                  className={comparisonProducts.has(product.id) ? 'bg-primary text-primary-foreground' : ''}
                                  title="Add to comparison"
                                >
                                  <GitCompare className="h-4 w-4" />
                                </Button>
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                      <MoreVertical className="h-4 w-4" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={() => openDetailsDialog(product)}>
                                      <Eye className="mr-2 h-4 w-4" />
                                      View Details
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => openEditDialog(product)}>
                                      <Edit className="mr-2 h-4 w-4" />
                                      Edit
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => openQuickStockDialog(product)}>
                                      <Zap className="mr-2 h-4 w-4" />
                                      Quick Stock Update
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => openNotesDialog(product)}>
                                      <FileText className="mr-2 h-4 w-4" />
                                      Notes
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => openDuplicateDialog(product)}>
                                      <Copy className="mr-2 h-4 w-4" />
                                      Duplicate
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem
                                      onClick={() => openDeleteDialog(product)}
                                      className="text-destructive"
                                    >
                                      <Trash2 className="mr-2 h-4 w-4" />
                                      Delete
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    {/* Pagination */}
                    {totalPages > 1 && (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                          >
                            <ChevronLeft className="h-4 w-4" />
                            Previous
                          </Button>
                          <span className="text-sm text-muted-foreground">
                            Page {currentPage} of {totalPages}
                          </span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                          >
                            Next
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center gap-2">
                          <Checkbox
                            checked={
                              paginatedProducts.length > 0 &&
                              selectedProducts.size === paginatedProducts.length
                            }
                            onCheckedChange={toggleSelectAll}
                          />
                          <span className="text-sm text-muted-foreground">Select all on page</span>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Statistics Tab */}
          <TabsContent value="statistics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Total Products</CardDescription>
                  <CardTitle className="text-3xl">{statistics.total}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">All products in inventory</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Total Inventory Value</CardDescription>
                  <CardTitle className="text-3xl">${statistics.totalValue.toFixed(2)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">Based on current stock</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Average Price</CardDescription>
                  <CardTitle className="text-3xl">${statistics.avgPrice.toFixed(2)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">Per product</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Total Stock</CardDescription>
                  <CardTitle className="text-3xl">{statistics.totalStock}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">Units available</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Status Distribution</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Active</span>
                      <span className="text-sm font-semibold">{statistics.active}</span>
                    </div>
                    <Progress value={(statistics.active / statistics.total) * 100} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Inactive</span>
                      <span className="text-sm font-semibold">{statistics.inactive}</span>
                    </div>
                    <Progress value={(statistics.inactive / statistics.total) * 100} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Out of Stock</span>
                      <span className="text-sm font-semibold">{statistics.outOfStock}</span>
                    </div>
                    <Progress value={(statistics.outOfStock / statistics.total) * 100} />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Category Distribution</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(statistics.categoryCounts).map(([category, count]) => (
                    <div key={category}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">{categoryLabels[category as ProductCategory]}</span>
                        <span className="text-sm font-semibold">{count}</span>
                      </div>
                      <Progress value={(count / statistics.total) * 100} />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Inventory Alerts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">Low Stock</div>
                        <div className="text-sm text-muted-foreground">Less than 20 units</div>
                      </div>
                      <Badge variant="destructive">{statistics.lowStock}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">Out of Stock</div>
                        <div className="text-sm text-muted-foreground">Zero units available</div>
                      </div>
                      <Badge variant="destructive">{statistics.outOfStock}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Supplier Distribution</CardTitle>
                <CardDescription>Products by supplier ({statistics.uniqueSuppliers} unique suppliers)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(statistics.supplierCounts)
                  .sort(([, a], [, b]) => b - a)
                  .map(([supplier, count]) => (
                    <div key={supplier}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">{supplier}</span>
                        <span className="text-sm font-semibold">{count}</span>
                      </div>
                      <Progress value={(count / statistics.total) * 100} />
                    </div>
                  ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Activity Tab */}
          <TabsContent value="activity" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Activity Log</CardTitle>
                <CardDescription>Recent actions and changes</CardDescription>
              </CardHeader>
              <CardContent>
                {activityLog.length === 0 ? (
                  <div className="text-center py-12">
                    <History className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No activity yet</h3>
                    <p className="text-muted-foreground">
                      Activity will appear here as you manage products
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {activityLog.map((log) => (
                      <div key={log.id} className="flex items-start gap-4 pb-4 border-b last:border-0">
                        <div className="mt-1">
                          {log.action === 'created' && (
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                          )}
                          {(log.action === 'updated' || log.action === 'stock_updated') && (
                            <Edit className="h-5 w-5 text-blue-500" />
                          )}
                          {(log.action === 'deleted' || log.action === 'bulk_deleted') && (
                            <Trash2 className="h-5 w-5 text-red-500" />
                          )}
                          {log.action === 'bulk_updated' && (
                            <Activity className="h-5 w-5 text-purple-500" />
                          )}
                          {log.action === 'duplicated' && (
                            <Copy className="h-5 w-5 text-orange-500" />
                          )}
                          {(log.action === 'favorited' || log.action === 'unfavorited') && (
                            <Star className="h-5 w-5 text-yellow-500" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold">
                            {log.action === 'created' && `Created product "${log.productName}"`}
                            {log.action === 'updated' && `Updated product "${log.productName}"`}
                            {log.action === 'stock_updated' && `Updated stock for "${log.productName}"`}
                            {log.action === 'deleted' && `Deleted product "${log.productName}"`}
                            {log.action === 'bulk_deleted' && `Bulk deleted ${log.productName}`}
                            {log.action === 'bulk_updated' && `Bulk updated ${log.productName}`}
                            {log.action === 'duplicated' && `Duplicated product "${log.productName}"`}
                            {log.action === 'favorited' && `Favorited "${log.productName}"`}
                            {log.action === 'unfavorited' && `Unfavorited "${log.productName}"`}
                          </div>
                          {log.details && (
                            <div className="text-sm text-muted-foreground mt-1">{log.details}</div>
                          )}
                          <div className="text-xs text-muted-foreground mt-1">
                            {new Date(log.timestamp).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Edit Dialog */}
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Edit Product</DialogTitle>
              <DialogDescription>
                Update the product information below
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="edit-name">
                  Product Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="edit-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter product name"
                />
                {formErrors.name && (
                  <p className="text-sm text-destructive">{formErrors.name}</p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-description">
                  Description <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="edit-description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  placeholder="Enter product description"
                  rows={4}
                />
                {formErrors.description && (
                  <p className="text-sm text-destructive">{formErrors.description}</p>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="edit-price">
                    Price ($) <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="edit-price"
                    type="number"
                    step="0.01"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    placeholder="0.00"
                  />
                  {formErrors.price && (
                    <p className="text-sm text-destructive">{formErrors.price}</p>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="edit-stock">
                    Stock <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="edit-stock"
                    type="number"
                    value={formData.stock}
                    onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                    placeholder="0"
                  />
                  {formErrors.stock && (
                    <p className="text-sm text-destructive">{formErrors.stock}</p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="edit-category">
                    Category <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) =>
                      setFormData({ ...formData, category: value as ProductCategory })
                    }
                  >
                    <SelectTrigger id="edit-category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(categoryLabels).map(([value, label]) => (
                        <SelectItem key={value} value={value}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {formErrors.category && (
                    <p className="text-sm text-destructive">{formErrors.category}</p>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="edit-status">Status</Label>
                  <Select
                    value={formData.status}
                    onValueChange={(value) =>
                      setFormData({ ...formData, status: value as ProductStatus })
                    }
                  >
                    <SelectTrigger id="edit-status">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(statusLabels).map(([value, label]) => (
                        <SelectItem key={value} value={value}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-supplier">
                  Supplier <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="edit-supplier"
                  value={formData.supplier}
                  onChange={(e) =>
                    setFormData({ ...formData, supplier: e.target.value })
                  }
                  placeholder="Enter supplier name"
                />
                {formErrors.supplier && (
                  <p className="text-sm text-destructive">{formErrors.supplier}</p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-tags">Tags (comma-separated)</Label>
                <Input
                  id="edit-tags"
                  value={formData.tags}
                  onChange={(e) =>
                    setFormData({ ...formData, tags: e.target.value })
                  }
                  placeholder="tag1, tag2, tag3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => {
                  setIsEditDialogOpen(false);
                  setSelectedProduct(null);
                  resetForm();
                }}
              >
                Cancel
              </Button>
              <Button onClick={handleEdit} disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Save Changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Delete Confirmation Dialog */}
        <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Delete Product</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete &quot;{selectedProduct?.name}&quot;? This
                action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => {
                  setIsDeleteDialogOpen(false);
                  setSelectedProduct(null);
                }}
              >
                Cancel
              </Button>
              <Button variant="destructive" onClick={handleDelete} disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Bulk Delete Dialog */}
        <Dialog open={isBulkDeleteDialogOpen} onOpenChange={setIsBulkDeleteDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Delete Selected Products</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete {selectedProducts.size} product{selectedProducts.size !== 1 ? 's' : ''}? This
                action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => {
                  setIsBulkDeleteDialogOpen(false);
                }}
              >
                Cancel
              </Button>
              <Button variant="destructive" onClick={handleBulkDelete} disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Delete {selectedProducts.size} Product{selectedProducts.size !== 1 ? 's' : ''}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Product Details Dialog */}
        <Dialog open={isDetailsDialogOpen} onOpenChange={setIsDetailsDialogOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{selectedProduct?.name}</DialogTitle>
              <DialogDescription>Product details and information</DialogDescription>
            </DialogHeader>
            {selectedProduct && (
              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-semibold">Description</Label>
                  <p className="text-sm text-muted-foreground mt-1">{selectedProduct.description}</p>
                </div>
                <Separator />
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-semibold">Price</Label>
                    <p className="text-lg font-semibold mt-1">${selectedProduct.price.toFixed(2)}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-semibold">Stock</Label>
                    <p className="text-lg font-semibold mt-1">{selectedProduct.stock} units</p>
                  </div>
                  <div>
                    <Label className="text-sm font-semibold">Category</Label>
                    <Badge variant="outline" className="mt-1">
                      {categoryLabels[selectedProduct.category]}
                    </Badge>
                  </div>
                  <div>
                    <Label className="text-sm font-semibold">Status</Label>
                    <Badge className={`${statusColors[selectedProduct.status]} text-white mt-1`}>
                      {statusLabels[selectedProduct.status]}
                    </Badge>
                  </div>
                  <div>
                    <Label className="text-sm font-semibold">Supplier</Label>
                    <p className="text-sm text-muted-foreground mt-1">{selectedProduct.supplier}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-semibold">Created</Label>
                    <p className="text-sm text-muted-foreground mt-1">{selectedProduct.createdAt}</p>
                  </div>
                </div>
                {selectedProduct.tags && selectedProduct.tags.length > 0 && (
                  <>
                    <Separator />
                    <div>
                      <Label className="text-sm font-semibold">Tags</Label>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {selectedProduct.tags.map((tag, idx) => (
                          <Badge key={idx} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </>
                )}
                {selectedProduct.notes && (
                  <>
                    <Separator />
                    <div>
                      <Label className="text-sm font-semibold">Notes</Label>
                      <p className="text-sm text-muted-foreground mt-1 whitespace-pre-wrap">{selectedProduct.notes}</p>
                    </div>
                  </>
                )}
                {selectedProduct.lastModified && (
                  <>
                    <Separator />
                    <div>
                      <Label className="text-sm font-semibold">Last Modified</Label>
                      <p className="text-sm text-muted-foreground mt-1">
                        {new Date(selectedProduct.lastModified).toLocaleString()}
                      </p>
                    </div>
                  </>
                )}
              </div>
            )}
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDetailsDialogOpen(false)}>
                Close
              </Button>
              <Button onClick={() => {
                setIsDetailsDialogOpen(false);
                openEditDialog(selectedProduct!);
              }}>
                <Edit className="h-4 w-4 mr-2" />
                Edit Product
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Duplicate Dialog */}
        <Dialog open={isDuplicateDialogOpen} onOpenChange={setIsDuplicateDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Duplicate Product</DialogTitle>
              <DialogDescription>
                Create a copy of &quot;{selectedProduct?.name}&quot;? The new product will have &quot;(Copy)&quot; appended to its name.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => {
                  setIsDuplicateDialogOpen(false);
                  setSelectedProduct(null);
                }}
              >
                Cancel
              </Button>
              <Button onClick={handleDuplicate} disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Duplicate
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Quick Stock Update Dialog */}
        <Dialog open={isQuickStockDialogOpen} onOpenChange={setIsQuickStockDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Quick Stock Update</DialogTitle>
              <DialogDescription>
                Update stock quantity for &quot;{selectedProduct?.name}&quot;
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="quick-stock">Stock Quantity</Label>
                <Input
                  id="quick-stock"
                  type="number"
                  value={quickStockValue}
                  onChange={(e) => setQuickStockValue(e.target.value)}
                  placeholder="Enter stock quantity"
                />
                <p className="text-xs text-muted-foreground">
                  Current stock: {selectedProduct?.stock} units
                </p>
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => {
                  setIsQuickStockDialogOpen(false);
                  setSelectedProduct(null);
                  setQuickStockValue('');
                }}
              >
                Cancel
              </Button>
              <Button onClick={handleQuickStockUpdate} disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Update Stock
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Notes Dialog */}
        <Dialog open={isNotesDialogOpen} onOpenChange={setIsNotesDialogOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Product Notes</DialogTitle>
              <DialogDescription>
                Add or edit notes for &quot;{selectedProduct?.name}&quot;
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="product-notes">Notes</Label>
                <Textarea
                  id="product-notes"
                  value={productNotes}
                  onChange={(e) => setProductNotes(e.target.value)}
                  placeholder="Add your notes here..."
                  rows={8}
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => {
                  setIsNotesDialogOpen(false);
                  setSelectedProduct(null);
                  setProductNotes('');
                }}
              >
                Cancel
              </Button>
              <Button onClick={handleSaveNotes} disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Save Notes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Comparison Dialog */}
        <Dialog open={isComparisonDialogOpen} onOpenChange={setIsComparisonDialogOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Product Comparison</DialogTitle>
              <DialogDescription>
                Compare up to 3 products side by side
              </DialogDescription>
            </DialogHeader>
            {comparisonProducts.size > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
                {Array.from(comparisonProducts).map((productId) => {
                  const product = products.find((p) => p.id === productId);
                  if (!product) return null;
                  return (
                    <Card key={productId}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{product.name}</CardTitle>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => toggleComparison(productId)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div>
                          <Label className="text-xs text-muted-foreground">Price</Label>
                          <p className="font-semibold">${product.price.toFixed(2)}</p>
                        </div>
                        <div>
                          <Label className="text-xs text-muted-foreground">Stock</Label>
                          <p className="font-semibold">{product.stock} units</p>
                        </div>
                        <div>
                          <Label className="text-xs text-muted-foreground">Supplier</Label>
                          <p className="font-semibold">{product.supplier}</p>
                        </div>
                        <div>
                          <Label className="text-xs text-muted-foreground">Category</Label>
                          <Badge variant="outline">{categoryLabels[product.category]}</Badge>
                        </div>
                        <div>
                          <Label className="text-xs text-muted-foreground">Status</Label>
                          <Badge className={`${statusColors[product.status]} text-white`}>
                            {statusLabels[product.status]}
                          </Badge>
                        </div>
                        <div>
                          <Label className="text-xs text-muted-foreground">Description</Label>
                          <p className="text-sm">{product.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            )}
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => {
                  setIsComparisonDialogOpen(false);
                  setComparisonProducts(new Set());
                }}
              >
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Settings Dialog */}
        <Dialog open={isSettingsDialogOpen} onOpenChange={setIsSettingsDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Settings</DialogTitle>
              <DialogDescription>
                Configure application settings
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label>Low Stock Threshold</Label>
                <div className="space-y-2">
                  <Slider
                    value={[stockThreshold]}
                    onValueChange={(value) => setStockThreshold(value[0])}
                    min={0}
                    max={100}
                    step={1}
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>0</span>
                    <span className="font-semibold">{stockThreshold} units</span>
                    <span>100</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Products with stock below this threshold will show a low stock alert
                </p>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>Items Per Page</Label>
                <RadioGroup
                  value={ITEMS_PER_PAGE.toString()}
                  onValueChange={(value) => {
                    // This would require state management for items per page
                    // For now, we'll keep it static
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="5" id="page-5" />
                    <Label htmlFor="page-5" className="cursor-pointer">5 items</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="10" id="page-10" />
                    <Label htmlFor="page-10" className="cursor-pointer">10 items</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="20" id="page-20" />
                    <Label htmlFor="page-20" className="cursor-pointer">20 items</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsSettingsDialogOpen(false)}>
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
